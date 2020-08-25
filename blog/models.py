from django.db import models
from django.shortcuts import reverse


# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100, null=True)
    slug = models.SlugField(max_length=100, null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("story_category", kwargs={"cat_slug": self.slug})

    class Meta:
        verbose_name = "Категория блога"
        verbose_name_plural = "Категории блога"


class Tag(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Тег"
        verbose_name_plural = "Теги"


class Story(models.Model):
    title = models.CharField(max_length=150, null=True)
    slug = models.SlugField(max_length=150)
    preview = models.CharField(max_length=200, blank=True, null=True, default=None)
    body = models.TextField()
    tags = models.ManyToManyField(Tag, related_name='tags')
    poster = models.ImageField(upload_to='blog/', blank=True, null=True, default=None)
    category = models.ForeignKey(Category, blank=True, null=True, default=None, on_delete=models.CASCADE)
    publicate = models.DateField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("story_detail", kwargs={"slug": self.slug, "cat_slug": self.category.slug})

    def get_comments(self):
        return self.comment_set.filter(parent__isnull=True)

    def get_type(self):
        return 'story'

    class Meta:
        verbose_name = "Статья"
        verbose_name_plural = "Статьи блога"


class Comment(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True, default=None)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    story = models.ForeignKey(Story, blank=True, null=True, default=None, on_delete=models.CASCADE)
    parent = models.ForeignKey(
        'self', verbose_name="Родитель", on_delete=models.SET_NULL, blank=True, null=True
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Комметарий"
        verbose_name_plural = "Коментарии"


class Brand(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50)
    image = models.ImageField()
    dsc = models.TextField()
    url = models.URLField()


    def get_absolute_url(self):
        return reverse("brand_detail",kwargs={"slug":self.slug})
