# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-08 16:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CMS_System', '0007_auto_20170408_1619'),
    ]

    operations = [
        migrations.AddField(
            model_name='reportdata',
            name='verified',
            field=models.BooleanField(default=True),
        ),
    ]
