from django.shortcuts import render, redirect
from django.http import HttpResponse
from . models import Product, Invoice, ProductInvoice
from django.http import HttpResponse


def index(request):
    return render(request, 'pages/index.html')

def factura(request):
    if request.method == "POST":
        invoice = Invoice()
        invoice.number = request.POST.get('number')
        invoice.phone = request.POST.get('phone')
        invoice.receiver = request.POST.get('receiver')
        invoice.sender = request.POST.get('sender')
        invoice.weight = request.POST.get('weight')
        invoice.date = request.POST.get('date')
        invoice.total = request.POST.get('total')
        invoice.passport_seria = request.POST.get('passport_seria')
        invoice.address = request.POST.get('address')
        invoice.save()

        products_id = [int(item) for item in request.POST.getlist('products[]')]
        products_quantity = [int(item) for item in request.POST.getlist('quantities[]')]
        products_price = [int(item) for item in request.POST.getlist('prices[]')]

        for index in range(len(products_id)):
            productInvoice = ProductInvoice()
            productInvoice.product = Product.objects.get(id=products_id[index])
            productInvoice.invoice = invoice
            productInvoice.product_count = products_quantity[index]
            productInvoice.price = products_price[index]
            productInvoice.save()

        return redirect('index')

    return render(request, 'pages/factura.html')


def factura_en(request):
    if request.method == "POST":
        invoice = Invoice()
        invoice.number = request.POST.get('number')
        invoice.phone = request.POST.get('phone')
        invoice.receiver = request.POST.get('receiver')
        invoice.sender = request.POST.get('sender')
        invoice.weight = request.POST.get('weight')
        invoice.date = request.POST.get('date')
        invoice.total = request.POST.get('total')
        invoice.passport_seria = request.POST.get('passport_seria')
        invoice.address = request.POST.get('address')
        invoice.save()

        products_id = [int(item) for item in request.POST.getlist('products[]')]
        products_quantity = [int(item) for item in request.POST.getlist('quantities[]')]
        products_price = [int(item) for item in request.POST.getlist('prices[]')]

        for index in range(len(products_id)):
            productInvoice = ProductInvoice()
            productInvoice.product = Product.objects.get(id=products_id[index])
            productInvoice.invoice = invoice
            productInvoice.product_count = products_quantity[index]
            productInvoice.price = products_price[index]
            productInvoice.save()

        return redirect('index')

    return render(request, 'pages/factura_en.html')

def product_questionnaire(request):
    products = Product.objects.all()
    return render(request, 'pages/product_questionnaire.html', {'products': products})

def questionnaire(request):
    return render(request, 'pages/questionnaire.html')

