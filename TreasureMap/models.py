from django.db import models


class MapPoint(models.Model):
    xPosition = models.IntegerField()
    yPosition = models.IntegerField()
    image = models.ImageField(upload_to='product_images')

    simplePoint = 'SimplePoint'
    lowPoint = 'LowPoint'
    highPoint = 'HighPoint'

    pointTypeChoice = [
        (simplePoint, "SimplePoint"),
        (lowPoint, "LowPoint"),
        (highPoint, "HighPoint"),
    ]
    pointType = models.CharField(max_length=11, choices=pointTypeChoice, default=simplePoint)
