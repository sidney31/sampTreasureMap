from django.contrib import admin
from django.urls import path, include
from TreasureQuestions import views


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('questions/', views.BulkInsert.as_view()),
    path('questions/', include('TreasureQuestions.urls', namespace='TreasureQuestions')),
    path('', include('TreasureMap.urls', namespace='TreasureMap')),
]
