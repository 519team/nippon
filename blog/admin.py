from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *
from ckeditor.widgets import CKEditorWidget
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django import forms


# Register your models here.


class StoryAdminForm(forms.ModelForm):
    body = forms.CharField(label='Текст статьи', widget=CKEditorUploadingWidget())

    class Meta:
        model = Story
        fields = '__all__'


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0
    readonly_fields = ('name', 'body',)


@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'title', 'category')
    list_filter = ('publicate',)
    list_display_links = ("title",)
    inlines = [CommentInline]
    form = StoryAdminForm


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')


# @admin.register(Comment)
# class CommentAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name')


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_image')
    readonly_fields = ("get_image",)

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.image.url}" width="140" height="60">')

    get_image.short_description = "Фото магазина"