from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name='index'),
    path('questionnaire/', views.questionnaire, name='questionnaire'),
    path('product_questionnaire/', views.product_questionnaire, name='product_questionnaire'),
    path('factura/', views.factura, name='factura'),
]