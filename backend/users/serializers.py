from allauth.account.adapter import get_adapter
from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import User

class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    contact_number = serializers.CharField(max_length=20)

    class Meta:
        model = User
        fields = [
            'username', 
            'password1', 
            'password2',
            'email', 
            'first_name',
            'last_name',
            'contact_number', 
        ]
        
    # override get_cleaned_data of RegisterSerializer
    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'first_name': self.validated_data.get('first_name'),
            'last_name': self.validated_data.get('last_name'),
            'contact_number': self.validated_data.get('contact_number'),
        }
        
    # override save method of RegisterSerializer
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.contact_number = self.cleaned_data.get('contact_number')
        user.role = 'customer' # customer by default
        user.save()
        adapter.save_user(request, user, self)
        return user