from django.contrib import admin
from .models import *
from ckeditor.widgets import CKEditorWidget
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django import forms


# Register your models here.


class ProductAdminForm(forms.ModelForm):
    dsc = forms.CharField(label='Описание', widget=CKEditorUploadingWidget())

    class Meta:
        model = Product
        fields = '__all__'


class ProductInMarketInline(admin.TabularInline):
    model = ProductInMarket
    extra = 1


# class ProductImageInline(admin.TabularInline):
#     model = ProductImage
#     extra = 1


class ProductInOrderInline(admin.TabularInline):
    model = ProductInOrder
    extra = 0
    readonly_fields = ("product", 'nmb', 'price_per_item', 'total_price')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'name', 'article', 'category', 'sub_category', 'price', 'count', 'is_new', 'is_hit', 'is_sovet')
    list_filter = ('count', 'is_new', 'is_hit', 'is_sovet')
    search_fields = ('name',)
    list_display_links = ("name",)
    list_editable = ("is_new", 'is_hit', 'is_sovet')
    inlines = [ProductInMarketInline]
    form = ProductAdminForm


@admin.register(ProductInBasket)
class ProductInBasketAdmin(admin.ModelAdmin):
    list_display = ('session_key', 'order', 'product', 'nmb', 'price_per_item', 'total_price', 'is_active')
    list_filter = ('session_key', 'is_active')


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'total_price', 'payment', 'delivery', 'status')
    list_filter = ('payment', 'delivery')
    inlines = [ProductInOrderInline]
    search_fields = ('user',)
    list_display_links = ("user",)


@admin.register(Status)
class StatusAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'is_active')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display=('id','alter_name')

admin.site.site_title = "Django Nippon"
admin.site.site_header = "Django Nippon"
