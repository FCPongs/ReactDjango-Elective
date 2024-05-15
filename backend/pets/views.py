from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers import PetSerializer
from .models import Pet
from .permissions import IsStaffOrReadOnly


class PetList(ListCreateAPIView):
    queryset = Pet.objects.all().order_by("-created_at")
    serializer_class = PetSerializer


class PetDetail(RetrieveUpdateDestroyAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
