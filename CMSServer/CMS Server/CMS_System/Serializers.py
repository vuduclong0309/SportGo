from rest_framework import serializers
from .models import Weather,ReportData, CrisisState
class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = ('weatherData',)#('id', 'weatherData')

class ReportDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportData
        fields = ('id','firstName','lastName','telephone','location','description','crisisType','assistanceType','verified','longitude','latitude',)

class CrisisStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrisisState
        fields = ('id','crisisState',)