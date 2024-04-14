from django.urls import path
from .views import PetDetail, PetList
from .views import ShelterList, ShelterDetail
from .views import BreedList, BreedDetail

urlpatterns = [
    path('pets/', PetList.as_view()),
    path('pets/<int:pk>/', PetDetail.as_view()),
    path('shelter/', ShelterList.as_view()),
    path('shelter/<int:pk>/', ShelterDetail.as_view()),
    path('breed/', BreedList.as_view()),
    path('breed/<int:pk>/', BreedDetail.as_view())
]
    