from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListCreateAPIView,  RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import PetSerializer, ShelterSerializer, BreedSerializer
from .models import Pet, Shelter, Breed

class PetList(ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

class PetDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    
class ShelterList(ListCreateAPIView):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer
    
class ShelterDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer
    
class BreedList(ListCreateAPIView):
    queryset = Breed.objects.all()
    queryset = Breed.objects.all()
    serializer_class = BreedSerializer
    
class BreedDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Breed.objects.all()
    serializer_class = BreedSerializer

