# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-08 16:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CMS_System', '0006_reportdata_assistancetype'),
    ]

    operations = [
        migrations.AddField(
            model_name='reportdata',
            name='latitude',
            field=models.TextField(default='0', max_length=100),
        ),
        migrations.AddField(
            model_name='reportdata',
            name='longitude',
            field=models.TextField(default='0', max_length=100),
        ),
    ]