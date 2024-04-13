from rest_framework import serializers
from .models import Pet, Shelter, Breed

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = [
            'id', 
            'name', 
            'gender', 
            'age', 
            'color', 
            'photo_url',
            'description',
            'status',
            'shelter',
            'breed',
            'created_at',
            'updated_at'
        ]

class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelter
        fields = [
            'id',
            'name',
            'location',
            'description',
            'created_at',
            'updated_at'
        ]
        
class BreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breed
        fields = [
            'id',
            'name',
            'type',
            'size',
            'created_at',
            'updated_at'
        ]