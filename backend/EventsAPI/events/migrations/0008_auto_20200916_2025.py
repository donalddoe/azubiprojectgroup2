# Generated by Django 3.0.3 on 2020-09-16 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0007_auto_20200916_2000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='event_name',
            field=models.CharField(default='', max_length=50),
        ),
    ]
