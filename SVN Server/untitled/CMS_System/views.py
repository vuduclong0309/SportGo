from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Weather
from .Serializers import WeatherSerializer
# Create your views here.

class WeatherViewSet(viewsets.ModelViewSet):
    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer

# class WeatherAPI(APIView):
#     def post(self,request):
#         queryset = Weather.objects.all()
#         serializer = WeatherSerializer(queryset,many=True)
#         return Response(serializer.data)
#
#     def get(self,request):
#         queryset = Weather.objects.all()
#         serializer = WeatherSerializer(queryset,many=True)
#         return Response(serializer.data)

def index(request):
    return HttpResponse("Hello World!!!")



def getWeatherData(request, data):
    return HttpResponse("This is a passed in data: %s" % data)

