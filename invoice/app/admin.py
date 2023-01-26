from django.contrib import admin
from . models import Product, Invoice, ProductInvoice



admin.site.register(Invoice)
admin.site.register(ProductInvoice)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'name_en',)

admin.site.register(Product, ProductAdmin)