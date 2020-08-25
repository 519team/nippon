from django import forms
from contact.models import Feedback


class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ("name", 'phone', 'email', 'message', 'subject')
        widgets = {
            "email": forms.TextInput(attrs={"class": "inputtext", "placeholder": "mail@domen.com"}),
            "name": forms.TextInput(attrs={"class": "inputtext"}),
            "phone": forms.TextInput(attrs={"class": "phone"}),
            "message": forms.Textarea(),
        }
