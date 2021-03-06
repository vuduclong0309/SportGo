from django.conf.urls import url,include
from CMS_System import views
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from .views import WeatherViewSet, ReportDataViewSet, CrisisStateViewSet, sendSMS

reportData_list = ReportDataViewSet.as_view({
    'get':'list',
    'post':'create'
})

reportData_detail = ReportDataViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'options': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

crisisState_list = CrisisStateViewSet.as_view({
    'get':'list',
    'post':'create'
})

router = routers.DefaultRouter()
router.register(r'weather',WeatherViewSet)
router.register(r'reportList', ReportDataViewSet)
router.register(r'getCrisisState',CrisisStateViewSet)
#router.register(r'weather',WeatherAPI)

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^',include(router.urls)),
    #url(r'^weather',views.WeatherAPI.as_view()),
    url(r'^sendSMS/(?P<number>\w+)',views.sendSMS),
]

#urlpatterns = format_suffix_patterns(urlpatterns)