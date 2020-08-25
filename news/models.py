from django.db import models
from django.shortcuts import reverse
from django.utils.datetime_safe import date


# Create your models here.


class News(models.Model):
    title = models.CharField(max_length=150, null=True)
    slug = models.SlugField(max_length=150)
    preview = models.CharField(max_length=200, blank=True, null=True, default=None)
    body = models.TextField()
    poster = models.ImageField("Постер новости", upload_to='news/', blank=True, null=True, default=None)
    publicate = models.DateField(default=date.today, blank=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("news_detail", kwargs={"slug": self.slug})

    def get_type(self):
        return 'news'

    class Meta:
        verbose_name = 'Новости'


class ImageNews(models.Model):
    image = models.ImageField(upload_to='news/', blank=True, null=True, default=None)
    news = models.ForeignKey(News, blank=True, null=True, default=None, on_delete=models.CASCADE)


class PersonalCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Personal(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=100)
    vacancy = models.CharField(max_length=100)
    image = models.ImageField(upload_to='staff/', blank=True, null=True, default=None)
    category = models.ForeignKey(PersonalCategory, blank=True, null=True, default=None, on_delete=models.CASCADE)
    email = models.EmailField(blank=True, null=True, default=None)
    phone = models.CharField(max_length=15, blank=True, null=True, default=None)
    phone_suffix = models.CharField(max_length=10, blank=True, null=True, default=None)
    insta = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("staff_detail", kwargs={"slug": self.slug})

    class Meta:
        verbose_name = 'Персонал'
        ordering = ['id']