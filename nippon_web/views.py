from django.http import HttpResponse
from django.shortcuts import render


def hello(request):
    return HttpResponse('''<h1>Hello world</h1>''')


def page_not_found(request, exception=None):
    return render(request, 'errs/404.html',status=404)
