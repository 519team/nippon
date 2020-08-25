from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *


# Register your models here.
class MetroInline(admin.TabularInline):
    """Отзывы на странице фильма"""
    model = Metro
    extra = 1


class MarketImageInline(admin.TabularInline):
    model = MarketImage
    extra = 1
    readonly_fields = ("get_image",)

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.image.url}" width="100" height="100">')

    get_image.short_description = "Фото магазина"


@admin.register(Market)
class MarketAdmin(admin.ModelAdmin):
    list_display = ('address', 'worktime')
    inlines = [MetroInline, MarketImageInline]
    save_on_top=True
    


