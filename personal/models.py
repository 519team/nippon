# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.TextField(max_length=500, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    subscribe_news = models.BooleanField(default=None, blank=True, null=True)
    format = models.CharField(max_length=20)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class UserBalanceChange(models.Model):
    user = models.ForeignKey(User, related_name='balance_changes', on_delete=models.CASCADE)
    reason = models.IntegerField()
    amount = models.DecimalField(default=0, max_digits=18, decimal_places=6)
    datetime = models.DateTimeField(default=timezone.now)
