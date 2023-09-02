from django.urls import path
from TreasureQuestions.views import questions_page

app_name = 'questions'

urlpatterns = [
    path('', questions_page, name='questions_page')
]
