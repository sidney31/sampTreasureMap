from django.shortcuts import render
from TreasureQuestions.models import QuestionsAndAnswers


def questions_page(request):
    context = {
        'title': 'Ответы на вопросы в кладах',
        'script': '{% static \'js/treasureAnswer.js\' %}',
        'questions': QuestionsAndAnswers.objects.all(),
    }
    return render(request, 'answers.html', context)