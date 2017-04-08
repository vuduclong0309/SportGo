from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Weather,ReportData, CrisisState
from .Serializers import WeatherSerializer,ReportDataSerializer, CrisisStateSerializer
from rest_framework.settings import api_settings
# Create your views here.

class WeatherViewSet(viewsets.ModelViewSet):
    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer

    def get_queryset(self):
        return Weather.objects.filter(weatherData="a")

class CrisisStateViewSet(viewsets.ModelViewSet):
    queryset = CrisisState.objects.all()
    serializer_class = CrisisStateSerializer

    def list(self, request, *args, **kwargs):
        queryset = CrisisState.objects.order_by('-id')[0]
        serializer = CrisisStateSerializer(queryset)
        return Response(serializer.data)

class ReportDataViewSet(viewsets.ModelViewSet):
    queryset = ReportData.objects.all()
    serializer_class = ReportDataSerializer

    def list(self, request, *args, **kwargs):
        queryset = ReportData.objects.all()
        serializer = ReportDataSerializer(queryset,many=True)
        return Response(serializer.data)#,headers={"Access-Control-Allow-Origin":"*"})

    def retrieve(self, request, *args, **kwargs):
        try:
            parameter = int(self.kwargs['pk'])
            return super(ReportDataViewSet, self).retrieve(request, *args, **kwargs)
        except Exception as e:
            queryset = ReportData.objects.filter(crisisType=self.kwargs['pk'])
            serializer = ReportDataSerializer(queryset,many=True)
            return Response(serializer.data)#,headers={"Access-Control-Allow-Origin":"*"})

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

    def get_success_headers(self, data):
        try:
            return {'Location': data[api_settings.URL_FIELD_NAME]}
        except (TypeError, KeyError):
            return {}

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
    # def update(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     print(instance)
    #     instance.crisisState = request.data.get("crisisState")
    #     instance.save()
    #
    #     serializer = self.get_serializer(instance)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #
    #     return Response(serializer.data)


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

