from django.urls import path
from .views import *
from django.urls import include

urlpatterns = [
    path('', main_page, name="main"),
    path('catalog/<category>/', category_catalog, name="catalog_details"),
    path('catalog/<category>/<index>', ProductDetail.as_view(), name='product_detail'),
    path('catalog/', catalog_info, name='catalog'),
    path('basket_update/', basket_update, name="basket_upd"),
    path('basket/', basket_order, name="basket"),
    path('order/', order, name='order'),
]
