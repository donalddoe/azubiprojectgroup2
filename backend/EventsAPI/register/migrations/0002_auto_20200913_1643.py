# Generated by Django 3.0.3 on 2020-09-13 16:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='register',
            old_name='phonenumber',
            new_name='phone_number',
        ),
        migrations.RenameField(
            model_name='register',
            old_name='ticketnumber',
            new_name='ticket_number',
        ),
    ]
