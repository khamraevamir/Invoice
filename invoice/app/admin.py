from django.contrib import admin
from . models import Product, Cart, Invoice, ProductInvoice

admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Invoice)
admin.site.register(ProductInvoice)