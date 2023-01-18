from django.contrib import admin
from . models import Product, Invoice, ProductInvoice

admin.site.register(Product)

admin.site.register(Invoice)
admin.site.register(ProductInvoice)