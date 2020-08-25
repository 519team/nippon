from django.shortcuts import render, redirect
from .models import *
from django.views.generic.base import View
from .forms import *
from django.db.models import Q
from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
from news.models import News
from django.views.generic import ListView, DetailView
from itertools import chain
from nipponapp.views import pagination


# Create your views here.
def stories(request):
    tags = Tag.objects.all()
    categories = Category.objects.all()
    stories = Story.objects.all()
    (page, is_paginated, prev_url, next_url) = pagination(request, stories, 6)
    return render(request, 'blog/blog_stories.html',
                  context={'stories': page, "tags": tags, "categories": categories,
                           'is_paginated':is_paginated,'prev_url':prev_url,'next_url':next_url})


def story(request, cat_slug, slug):
    story = Story.objects.get(slug=slug)
    tags = Tag.objects.all()
    categories = Category.objects.all()
    return render(request, 'blog/story_detail.html', context={'story': story, "tags": tags, "categories": categories})


class AddComment(View):
    """Отзывы"""

    def post(self, request, pk):
        print(request.POST)
        form = CommentForm(request.POST)
        story = Story.objects.get(id=pk)
        if form.is_valid():
            form = form.save(commit=False)
            if request.POST.get("parentId", None):
                form.parent_id = int(request.POST.get("parentId"))
            form.story = story
            form.save()
        return redirect(story.get_absolute_url())


def category_story(request, cat_slug):
    category = Category.objects.get(slug=cat_slug)
    stories = Story.objects.filter(category=category)
    tags = Tag.objects.all()
    categories = Category.objects.all()
    return render(request, 'blog/category_story.html',
                  context={'stories': stories, "tags": tags, "categories": categories, 'cat': category})


def generate_preview(object, q):
    object.title = object.title.replace(f'{q}', f'<b>{q}</b>')
    object.body = object.body.replace(f'{q}', f'<b>{q}</b>')


def search_blog(request):
    pass
    # tag_q = request.GET.get("tags", '')
    # q = request.POST.get('q', '')
    # if not q:
    #     q=request.GET.get('q','')
    # order=request.GET.get('order','-rank')
    #
    # final_set = []
    # if tag_q:
    #     tag = Tag.objects.get(slug=tag_q)
    #     query = SearchQuery(tag_q)
    #     vector = SearchVector('body')
    #     final_set = tag.tags.annotate(
    #         rank=SearchRank(vector,query)
    #         ).all().order_by(order)
    # if q:
    #     query = SearchQuery(q)
    #     vector = SearchVector('body')
    #     stories = Story.objects.annotate(
    #         search=SearchVector('body', 'title'),
    #         headline=SearchHeadline(
    #             'body',
    #             query,
    #             start_sel='<b>',
    #             stop_sel='</b>',
    #             short_word=len(q)-1,
    #             fragment_delimiter='...'
    #         ),
    #         rank=SearchRank(vector, query)
    #     ).filter(Q(title__icontains=q) | Q(body__icontains=q))
    #     news=News.objects.annotate(
    #         search=SearchVector('body', 'title'),
    #         headline=SearchHeadline(
    #             'body',
    #             query,
    #             start_sel='<b>',
    #             stop_sel='</b>',
    #             short_word=len(q)-1,
    #             fragment_delimiter='...'
    #         ),
    #         rank=SearchRank(vector, query)
    #     ).filter(Q(title__icontains=q) | Q(body__icontains=q))
    #     final_set.append(news)
    #     final_set.append(stories)
    #     final_set = list(chain(*final_set))
    #     if order=='-rank':
    #         final_set.sort(key=lambda x: x.rank, reverse=True)
    #     else:
    #         final_set.sort(key=lambda x: x.publicate, reverse=True)
    # return render(request, 'blog/search_blog.html', context={'stories': final_set, 'search': q,'order':order,'tag':tag_q})


class BrandsView(ListView):
    model = Brand
    queryset = Brand.objects.all()


class BrandDetailView(DetailView):
    model = Brand
    slug_field = "slug"

