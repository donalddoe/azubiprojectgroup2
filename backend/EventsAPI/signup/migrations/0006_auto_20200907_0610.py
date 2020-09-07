# Generated by Django 3.0.3 on 2020-09-07 06:10

import django.core.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0005_auto_20200907_0108'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='confirmpassword',
            field=models.CharField(default=django.utils.timezone.now, max_length=32, validators=[django.core.validators.MinLengthValidator(8)]),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='ifLogged',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='phonenumber',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='user',
            name='token',
            field=models.CharField(default='', max_length=500, null=True),
        ),
    ]