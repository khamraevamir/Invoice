# Generated by Django 4.1.4 on 2022-12-22 14:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=255, null=True)),
                ('phone', models.CharField(max_length=255, verbose_name='Телефон')),
                ('receiver', models.CharField(max_length=255, verbose_name='Получатель')),
                ('sender', models.CharField(max_length=255, verbose_name='Отправитель')),
                ('weight', models.CharField(max_length=255, null=True)),
                ('date', models.CharField(max_length=255, null=True)),
                ('total', models.IntegerField(default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Наименование')),
                ('price', models.IntegerField(default=0, verbose_name='Цена')),
            ],
            options={
                'verbose_name': 'Продукты',
                'verbose_name_plural': 'Продукт',
            },
        ),
        migrations.CreateModel(
            name='ProductInvoice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_count', models.IntegerField(default=0)),
                ('passport_seria', models.CharField(max_length=100, unique=True, verbose_name='Паспорт (серия)')),
                ('address', models.CharField(max_length=100, null=True, verbose_name='Адрес')),
                ('invoice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.invoice')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.product')),
            ],
        ),
        migrations.AddField(
            model_name='invoice',
            name='products',
            field=models.ManyToManyField(through='app.ProductInvoice', to='app.product'),
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.product')),
            ],
            options={
                'verbose_name': 'Корзина',
                'verbose_name_plural': 'Корзина',
            },
        ),
    ]
