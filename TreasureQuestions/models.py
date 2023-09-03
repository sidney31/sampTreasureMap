from django.db import models


class QuestionsAndAnswers(models.Model):
    question = models.TextField()
    answer = models.TextField()