from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *
from ckeditor.widgets import CKEditorWidget
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django import forms
# Register your models here.


class NewsAdminForm(forms.ModelForm):
    body = forms.CharField(label='Текст статьи',widget=CKEditorUploadingWidget())

    class Meta:
        model = News
        fields = '__all__'


class NewsImageInline(admin.TabularInline):
    model = ImageNews
    extra = 1
    readonly_fields = ("get_image",)

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.image.url}" width="100" height="100">')

    get_image.short_description = "Фото магазина"


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title','publicate',)
    inlines = [NewsImageInline]
    save_on_top=True
    form=NewsAdminForm


@admin.register(Personal)
class PersonalAdmin(admin.ModelAdmin):
    list_display = ('id','name','category')


@admin.register(PersonalCategory)
class PersonalCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)