from django import forms
from .models import *


class CheckoutContactForm(forms.Form):
    name = forms.CharField(required=True)
    phone = forms.CharField(required=True)
    email = forms.CharField(required=True)


class RegistrationForm(forms.Form):
    username = forms.CharField(required=True, label='', help_text='')
    name = forms.CharField(required=True)
    # phone = forms.RegexField(regex="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$")
    email = forms.EmailField(required=True)
    password = forms.CharField(min_length=8)


class EmailForm(forms.Form):
    email = forms.EmailField(required=True)
