from django.shortcuts import render


def index(request):
    context = {
        'title': 'Карта кладов',
        'script': '{% static \'js/index.js\' %}',
    }
    return render(request, 'map.html', context)
