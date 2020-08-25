from django.urls import path
from .views import *

urlpatterns = [
    path('news/', news, name='news'),
    path("news/<str:slug>/", news_detail, name='news_detail'),
    path('staff/', Staff.as_view(), name="staff"),
    path('staff/<str:slug>/', StaffDetail.as_view(), name="staff_detail"),
    path('vacancy/', Vacancy.as_view(), name="vacancy"),
]
