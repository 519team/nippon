from django.shortcuts import render
from .models import *
from django.views.generic import ListView, DetailView
from django.views.generic.base import View
from nipponapp.views import pagination

# Create your views here.
def news(request):
    year = ''
    news = News.objects.all()
    years = [d.year for d in News.objects.all().dates('publicate', 'year')]
    if request.GET:
        year = int(request.GET.get("year",0))
        if (year):
            news = News.objects.filter(publicate__year=year)
    (page, is_paginated, prev_url, next_url) = pagination(request, news, 6)
    return render(request, 'news/news.html', context={'news': page, 'years': years, 'pub_year': year,
                                                      'is_paginated':is_paginated,'prev_url':prev_url,'next_url':next_url})


def news_detail(request, slug):
    item = News.objects.get(slug=slug)
    return render(request, 'news/news_detail.html', context={'news': item})


class Staff(ListView):
    model = PersonalCategory
    queryset = PersonalCategory.objects.all()


class StaffDetail(DetailView):
    model = Personal
    slug_field = "slug"


class Vacancy(View):
    def get(self, request):
        return render(request, 'news/vacancy.html')

    def post(self, request):
        pass
