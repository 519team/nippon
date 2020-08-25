from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.views.generic import ListView, DetailView
from .models import *
from .forms import *


# Create your views here.
class MarketsView(ListView):
    model = Market
    queryset = Market.objects.order_by('id')


class MarketDetailView(DetailView):
    model = Market
    slug_field = 'id'


class AddFeedback(View):
    """Отзывы"""

    def post(self, request):
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/market/contacts')

    def get(self, request):
        form = FeedbackForm()
        return render(request, 'market/contacts.html', context={"form": form})
