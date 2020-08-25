from django.urls import path
from .views import *

urlpatterns = [
    path('', stories, name='blog'),
    path("comment/<int:pk>/", AddComment.as_view(), name="add_comment"),
    path("search/", search_blog, name="search"),
    path("brands/", BrandsView.as_view(), name="brands"),
    path("brands/<str:slug>", BrandDetailView.as_view(), name="brand_detail"),
    path('<str:cat_slug>/', category_story, name="story_category"),
    path('<str:cat_slug>/<str:slug>/', story, name="story_detail"),

]
