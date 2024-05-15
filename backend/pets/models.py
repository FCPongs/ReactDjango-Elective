from django.db import models
from users.models import User

class Shelter(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
        
class Breed(models.Model):
    TYPES = [
        ("dog", "Dog"),
        ("cat", "Cat"),
        ("other", "Other"),
    ]
    
    SIZES = [
        ("s", "Small"),
        ("m","Medium"),
        ("l", "Large"),
    ]

    name = models.CharField(max_length=100)
    type = models.CharField(max_length=10, choices=TYPES)
    size = models.CharField(max_length=10, choices=SIZES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    
    def __str__(self):
        return self.name

class Pet(models.Model):
    STATUSES = [
        ("available", "Ready for Adoption"),
        ("adopted", "Adopted"),
        ("unavailable", "Unavailable")
    ]
    
    GENDER = [
        ("m", "Male"),
        ("f", "Female"),
        ("u", "Unknown")
    ]

    name = models.CharField("Name", max_length=100)
    gender = models.CharField("Gender", max_length=10, choices=GENDER)
    age = models.PositiveSmallIntegerField()
    color = models.CharField("Color", max_length=50)
    photo_url = models.URLField("Photo URL")
    description = models.TextField("Description")
    status = models.CharField("Status", max_length=20, choices=STATUSES)
    
    # relationships 
    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE)
    breed = models.ForeignKey(Breed, on_delete=models.DO_NOTHING)
    adopted_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, verbose_name="Adopted By", null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    

    
    

