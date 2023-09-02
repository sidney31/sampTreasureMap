from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('questions/', include('TreasureQuestions.urls', namespace='TreasureQuestions')),
    path('', include('TreasureMap.urls', namespace='TreasureMap')),
]
