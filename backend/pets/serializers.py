from rest_framework import serializers
from .models import Pet


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = [
            "id",
            "name",
            "type",
            "age",
            "breed",
            "photo_url",
            "description",
            "created_at",
            "date_added",
            "updated_at",
        ]

        read_only_fields = [
            "date_added",
        ]
