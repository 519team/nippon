from django.urls import path
from .views import *
from django.urls import include

urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),
    path('regestration/', Regestration.as_view(), name='regestration'),
    path('', personal_main, name='personal_main'),
    path('logout/', logout_view, name='logout_personal'),
    path('amount/', amount, name="amount"),
    path('profiles/', get_profiles, name='order_profiles'),
    path('orders/', get_orders, name='orders'),
    path('private/', ChangePrivateData.as_view(), name='private'),
    path('change-password/', ChangePassword.as_view(), name="change_pass"),
    path('subscribe/', Subscribe.as_view(), name="subscribe"),
    # path('data/<id>',fetch_data)
]
