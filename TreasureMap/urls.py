from django.urls import path
from TreasureMap.views import index

app_name = 'map'

urlpatterns = [
    path('', index, name='index')
]
