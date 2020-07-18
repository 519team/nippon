from django.contrib import admin
from .models import *
# Register your models here.



@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name','article' ,'category','sub_category', 'price','count','is_new','is_hit','is_sovet')
    list_filter = ('count', 'is_new','is_hit','is_sovet')


@admin.register(ProductInBasket)
class ProductInBasketAdmin(admin.ModelAdmin):
    list_display = ('session_key','order', 'product', 'nmb', 'price_per_item','total_price','is_active')
    list_filter=('session_key','is_active')

@admin.register(ProductInOrder)
class ProductInOrder(admin.ModelAdmin):
    # list_display = ('id', 'name', 'category', 'price')
    pass

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'total_price', 'payment','delivery','status')
    list_filter = ('payment', 'delivery')
