from django.urls import path
from .views import *
from django.urls import include

urlpatterns = [
    path('', main_page, name="main"),
    path('catalog/<category>/', category_catalog, name="catalog_details"),
    path('catalog/<category>/<index>', product_detail, name='product_detail'),
    path('catalog/', catalog_info, name='catalog'),
    path('basket_update/', basket_update, name="basket_upd"),
    path('basket/', basket_order, name="basket"),
    path('order/', order, name='order'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/regestration/', regestration, name='regestration'),
    path('personal/', personal_main, name='personal_main'),
    path('personal/logout/', logout_view, name='logout_personal'),
    path('politic/', politic, name='politic')
    # path('data/<id>',fetch_data)
]
