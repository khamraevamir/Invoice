# Generated by Django 4.1.4 on 2022-12-24 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_invoice_options_alter_productinvoice_options_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='price',
        ),
        migrations.AddField(
            model_name='productinvoice',
            name='price',
            field=models.IntegerField(default=0, verbose_name='Цена'),
        ),
    ]