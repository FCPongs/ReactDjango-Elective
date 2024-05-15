from django.db import models
from django.contrib.auth.models import AbstractUser
    
class User(AbstractUser):
    class Meta:
        db_table = 'auth_user'
        
    ROLES = [
        ("admin", "Admin"),
        ("staff" , "Staff"),
        ("customer", "Customer")
    ]

    # Base Class: First Name, Last Name, Email, Username, Password
    contact_number = models.CharField("Contact Number", max_length=50)
    identification_card = models.URLField("Identification Card", max_length=255, blank=True)
    role = models.CharField("Role", max_length=10, choices=ROLES)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
