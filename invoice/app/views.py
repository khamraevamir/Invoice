from django.shortcuts import render
from django.http import HttpResponse
from . models import Product


def index(request):
    return render(request, 'pages/index.html')

def factura(request):
    return render(request, 'pages/factura.html')

def product_questionnaire(request):
    products = Product.objects.all()
    return render(request, 'pages/product_questionnaire.html', {'products': products})

def questionnaire(request):
    return render(request, 'pages/questionnaire.html')

