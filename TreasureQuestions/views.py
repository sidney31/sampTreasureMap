from django.shortcuts import render
from TreasureQuestions.models import QuestionsAndAnswers
from django.views.generic import ListView
from TreasureMap.models import MapPoint


def questions_page(request):
    context = {
        'title': 'Ответы на вопросы в кладах',
        'script': '{% static \'js/treasureAnswer.js\' %}',
        'questions': QuestionsAndAnswers.objects.all(),
    }
    return render(request, 'answers.html', context)


# class BulkInsert(ListView):
#     model = MapPoint
#     queryset = model.objects.all()
#     # Check the books table is empty or not
#     f = open("TreasureQuestions/qa.txt", 'r+', encoding="utf-8")
#     if not queryset.exists():
#         for i in range(len(f.readlines())):
#             splitString = str(f.readlines(i)).split(' — ')
#             print(splitString)
#             model.objects.bulk_create([
#                 model(question=splitString[0], answer=splitString[1])
#             ])
#     f.close()
