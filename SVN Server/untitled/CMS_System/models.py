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
