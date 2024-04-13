from django.urls import path
from .views import PetDetail, PetList
from .views import ShelterList, ShelterDetail
from .views import BreedList, BreedDetail

urlpatterns = [
    path('', PetList.as_view()),
    path('<int:pk>/', PetDetail.as_view()),
    path('shelter/', ShelterList.as_view()),
    path('shelter/<int:pk>/', ShelterDetail.as_view()),
    path('breed/', BreedList.as_view()),
    path('breed/<int:pk>/', BreedDetail.as_view())
]
    