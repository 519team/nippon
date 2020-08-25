from django.db import models


# Create your models here.
class Market(models.Model):
    point = models.CharField(max_length=100, blank=True, null=True, default=None)
    address = models.CharField(max_length=200)
    worktime = models.CharField(max_length=50)
    path = models.CharField(max_length=300, blank=True, null=True, default=None)
    phone = models.CharField(max_length=48, blank=True, null=True, default=None)
    phone_suffix = models.CharField(max_length=15, blank=True, null=True, default=None)
    email = models.EmailField(blank=True, null=True, default=None)

    def __str__(self):
        return self.address

    def title_img(self):
        return self.marketimage_set.get(title=self.address).image.url

    class Meta:
        verbose_name = 'Магазин'
        verbose_name_plural = 'Магазины'


class MarketImage(models.Model):
    image = models.ImageField(upload_to='market/')
    market = models.ForeignKey(Market, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True, blank=True)


class Metro(models.Model):
    name = models.CharField(max_length=50)
    market = models.ForeignKey(Market, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Метро'
        verbose_name_plural = 'Метро'
