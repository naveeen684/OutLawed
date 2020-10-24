from django.db import models

# Create your models here.
class Link(models.Model):
    TypeOfEvent=models.CharField(max_length=20,
                        choices=(("1","Material"),("2","Quiz")),
                        default='1'
                        )
    Title=models.CharField(max_length=200)
    Description=models.CharField(max_length=200)
    Link=models.URLField()
    Date=models.DateField()

    def __str__(self):
        return 'Title: ' + self.Title
    