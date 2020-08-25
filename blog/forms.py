from django import forms

from .models import Comment


class CommentForm(forms.ModelForm):
    """Форма отзывов"""
    class Meta:
        model = Comment
        fields = ("name", "email", "body")