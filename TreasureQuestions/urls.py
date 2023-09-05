from django.urls import path
from TreasureQuestions.views import questions_page
from TreasureQuestions import models

app_name = 'questions'

urlpatterns = [
    path('', questions_page, name='questions_page')
]
