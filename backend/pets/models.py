from django.db import models
from users.models import User


class Pet(models.Model):

    name = models.CharField("Name", max_length=100)
    type = models.CharField("Type")
    age = models.PositiveSmallIntegerField()
    breed = models.CharField("Breed")
    photo_url = models.CharField("Photo")
    description = models.TextField("Description")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    @property
    def date_added(self):
        return self.created_at.strftime("%m/%d/%Y")
