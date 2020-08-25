from django.urls import path
from .views import *

urlpatterns = [
    path("", MarketsView.as_view(), name='markets'),
    path('stories/<int:pk>/', MarketDetailView.as_view(), name="market_detail"),
    path('contacts/', AddFeedback.as_view(), name='contacts')
]
