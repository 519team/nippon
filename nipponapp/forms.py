from django import forms


class CheckoutContactForm(forms.Form):
    name = forms.CharField(required=True)
    phone = forms.CharField(required=True)
    email = forms.CharField(required=True)


class EmailForm(forms.Form):
    email = forms.EmailField(required=True)