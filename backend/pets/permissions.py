from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsStaffOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        """
        The request is authenticated as a staff, or is a read only request. 
        """
        
        return bool(
            request.method in SAFE_METHODS or 
            request.user and 
            request.user.is_authenticated and 
            (request.user.role == "staff" or request.user.role == "admin")
        )