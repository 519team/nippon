from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.views.generic.base import View
from nipponapp.models import Order, ProductInOrder
from .forms import *


# Create your views here.

class Regestration(View):
    def get(self, request):
        form = SignUpForm()
        return render(request, 'personal/regestration.html', context={"form": form})

    def post(self, request):
        print(request.POST)
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/personal/accounts/login/')
        else:
            return redirect('/personal/accounts/regestration/')


def logout_view(request):
    logout(request)
    return redirect('/nippon/')


@login_required(login_url='/personal/accounts/login/')
def personal_main(request):
    return render(request, 'personal/personal_main_page.html')


@login_required(login_url='/personal/accounts/login/')
def amount(request):
    return render(request, 'personal/amount.html')


@login_required(login_url='/personal/accounts/login/')
def get_profiles(request):
    orders = Order.objects.filter(user=request.user)
    return render(request, 'personal/profiles.html', context={'orders': orders})


@login_required(login_url='/personal/accounts/login/')
def get_orders(request):
    orders = Order.objects.filter(user=request.user, status_id=3)
    return render(request, 'personal/orders.html', context={'orders': orders})


class ChangePrivateData(LoginRequiredMixin, View):
    redirect_url = '/personal/accounts/login/'

    def get(self, request):
        return render(request, 'personal/private.html')

    def post(self, request):
        pass


class ChangePassword(LoginRequiredMixin, View):
    redirect_url = '/personal/accounts/login/'

    def get(self, request):
        return render(request, 'personal/change_password.html')

    def post(self, request):
        pass


class Subscribe(LoginRequiredMixin, View):
    redirect_url = '/personal/accounts/login/'

    def get(self, request):
        return render(request, 'personal/subscribe.html')

    def post(self, request):
        pass
