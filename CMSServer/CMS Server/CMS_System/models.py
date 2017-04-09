from __future__ import unicode_literals

from django.db import models
from firebase import firebase
# Create your models here.

class Weather(models.Model):
    # firebase = firebase.FirebaseApplication('https://cmsproj-496d4.firebaseio.com/')
    # weatherData = firebase.get('/weather',None)
    weatherData = models.TextField(max_length=100)

    def __str__(self):
        return self.weatherData

class CrisisState(models.Model):
    crisisState = models.TextField(max_length=10)

    def __str__(self):
        return self.crisisState

class ReportData(models.Model):
    # id = models.IntegerField(primary_key=True)
    firstName = models.TextField(max_length=100)
    lastName = models.TextField(max_length=100)
    telephone = models.IntegerField()
    location = models.TextField(max_length=100)
    description = models.TextField(max_length=1000,null=True)
    crisisType = models.TextField(max_length=10)
    assistanceType = models.TextField(max_length=100, null=True)
    verified = models.BooleanField(default=False)
    longitude = models.TextField(max_length=100,default='0')
    latitude = models.TextField(max_length=100,default='0')

    def __str__(self):
        return self.firstName
