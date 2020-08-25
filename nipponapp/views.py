from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from .models import *
from django.core.paginator import Paginator
from django.db.models import Q
from django.http import JsonResponse, HttpResponse
from .forms import *
from blog.models import Brand
from market.forms import FeedbackForm
from django.views.generic.base import View


# sub function for views
def pagination(request, objects_list, count_of_page):
    paginator = Paginator(objects_list, count_of_page)
    page_number = request.GET.get('PAGEN_1', 1)
    page = paginator.get_page(page_number)
    is_paginated = page.has_other_pages()

    if page.has_previous():
        prev_url = 'PAGEN_1={}'.format(page.previous_page_number())
    else:
        prev_url = ''

    if page.has_next():
        next_url = 'PAGEN_1={}'.format(page.next_page_number())
    else:
        next_url = ''
    return (page, is_paginated, prev_url, next_url)


# Create your views here.
def main_page(request):
    catalog = Category.objects.all().order_by('id')
    new = Product.objects.filter(is_new=True)[:10]
    hit = Product.objects.filter(is_hit=True)[:10]
    sovet = Product.objects.filter(is_sovet=True)[:10]
    brands = Brand.objects.all()
    return render(request, 'nipponapp/main_page.html',
                  context={'catalog': catalog, 'new': new, 'hit': hit, 'sovet': sovet, 'brands': brands})


def category_catalog(request, category):
    sub_flag = False
    sub_category = ''
    title = ''
    search_query = request.GET.get('q', '')
    if search_query:
        products = Product.objects.filter(
            Q(name__icontains=search_query) | Q(article__icontains=search_query)).order_by('name').distinct('name')
        title = 'Поиск'
    else:
        try:
            category = Category.objects.get(name=category)
            sub_flag = True
        except:
            sub_category = SubCategory.objects.get(name=category)
        if (sub_flag):
            products = Product.objects.filter(category=category)
            title = category.alter_name
            sub_cat_list = SubCategory.objects.filter(id_category=category)
        else:
            products = Product.objects.filter(sub_category=sub_category)
            category = sub_category.id_category
            title = sub_category.alter_name
            sub_cat_list = SubCategory.objects.filter(id_category=category)
    # block, list,table
    display = request.GET.get('display', 'block')

    # display = 'display={}'.format(req)
    (page, is_paginated, prev_url, next_url) = pagination(request, products, 20)
    if request.is_ajax():
        page_number = request.GET.get('PAGEN_1', 1)
        if int(page_number) <= page.paginator.num_pages:
            return render(request, 'nipponapp/ajax_products.html', context={'products': page, 'display': display})
        else:
            return HttpResponse('')
    catalog = Category.objects.all().order_by('id')
    if search_query:
        context = {'title': title,
                   'display': display,
                   'search': search_query,
                   'products': page,
                   'sub_flag': sub_flag,
                   'catalog': catalog,
                   'is_paginated': is_paginated,
                   'next_url': next_url,
                   'prev_url': prev_url}
    else:
        context = {'display': display,
                   'title': title,
                   'products': page,
                   'category': category,
                   'sub_flag': sub_flag,
                   'sub_category': sub_category,
                   'catalog': catalog,
                   'sub_cat_list': sub_cat_list,
                   'is_paginated': is_paginated,
                   'next_url': next_url,
                   'prev_url': prev_url}
    return render(request, 'nipponapp/catalog.html', context=context)


class ProductDetail(View):
    def get(self, request, category, index):
        form = FeedbackForm()
        product = Product.objects.get(id=index)
        title = product.name
        category = product.category
        sub_category = product.sub_category
        if (sub_category):
            sub_flag = False
        else:
            sub_flag = True
        sub_cat_list = SubCategory.objects.filter(id_category=category)
        catalog = Category.objects.all().order_by('id')
        context = {'title': title,
                   'product': product,
                   'category': category,
                   'sub_flag': sub_flag,
                   'sub_category': sub_category,
                   'catalog': catalog,
                   'sub_cat_list': sub_cat_list,
                   'form': form}
        return render(request, 'nipponapp/product_detail.html', context=context)

    def post(self, request, category, index):
        form = FeedbackForm(request.POST)
        subject = request.POST.get('subject', '')
        product = Product.objects.get(id=index)
        if form.is_valid():
            form.subject_id = subject
            form.save()
        return redirect(product.get_absolute_url())


def catalog_info(request):
    title = 'Каталог'
    catalog = Category.objects.all().order_by('id')
    sub_category_list = SubCategory.objects.all()
    return render(request, 'nipponapp/catalog_info.html', context={'catalog': catalog,
                                                                   'sub_cat_list': sub_category_list,
                                                                   'title': title})


def basket_update(request):
    return_dict = dict()
    session_key = request.session.session_key
    data = request.POST
    product_id = data.get("product_id")
    print(product_id)
    nmb = data.get("nmb")
    is_delete = data.get("is_delete")
    if is_delete == 'true':
        ProductInBasket.objects.filter(product_id=product_id).update(is_active=False)
    else:
        new_product, created = ProductInBasket.objects.get_or_create(session_key=session_key, product_id=product_id,
                                                                     is_active=True, defaults={"nmb": nmb})
        if not created:
            print("not created")
            new_product.nmb = int(nmb)
            new_product.save(force_update=True)

    # common code for 2 cases
    products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True, order__isnull=True)
    products_total_nmb = products_in_basket.count()
    return_dict["products_total_nmb"] = products_total_nmb

    return_dict["products"] = list()
    for item in products_in_basket:
        product_dict = dict()
        product_dict["id"] = item.id
        product_dict["name"] = item.product.name
        product_dict["product_id"] = item.product.id
        product_dict["price_per_item"] = item.price_per_item
        product_dict["nmb"] = item.nmb
        product_dict["href"] = item.product.id
        product_dict["image"] = item.product.productimage_set.all()[0].path
        return_dict["products"].append(product_dict)

    return JsonResponse(return_dict)


def basket_order(request):
    return render(request, 'nipponapp/basket.html')


def order(request):
    form = CheckoutContactForm(request.POST or None)
    if request.is_ajax():
        return_dict = dict()
        data = request.POST
        print(request.POST)
        if form.is_valid():
            print('valid')
            name = data["name"]
            phone = data["phone"]
            email = data["email"]
            user, created = User.objects.get_or_create(username=phone, defaults={"first_name": name, "email": email})
            order_new = Order.objects.create(user=user, customer_name=name, customer_phone=phone, customer_email=email,
                                             customer_address=data.get("address", ''), delivery=data["delivery"],
                                             payment=data["payment"],
                                             comments=data.get('comment', ''), status_id=3)
            for name, value in data.items():
                if name.startswith("product-"):
                    product_in_basket_id = name.split("product-")[1]
                    print(product_in_basket_id)
                    product_in_basket = ProductInBasket.objects.get(is_active=True, product_id=product_in_basket_id)
                    ProductInOrder.objects.create(product=product_in_basket.product, nmb=product_in_basket.nmb,
                                                  price_per_item=product_in_basket.price_per_item,
                                                  total_price=product_in_basket.total_price,
                                                  order=order_new)
                    ProductInBasket.objects.filter(product_id=product_in_basket_id).update(is_active=False)
            return_dict["order"] = order_new.id
            print(return_dict)
            return JsonResponse(return_dict)
        else:
            print('no')
    elif request.GET:
        order_id = request.GET.get("order", 0)
        if order_id:
            order = Order.objects.get(id=order_id)
            return render(request, 'nipponapp/check.html', context={'order': order})

    return render(request, 'nipponapp/order.html')


