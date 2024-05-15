from django.urls import path
from .views import PetDetail, PetList

urlpatterns = [
    path("pets/", PetList.as_view()),
    path("pets/<int:pk>/", PetDetail.as_view()),
]
