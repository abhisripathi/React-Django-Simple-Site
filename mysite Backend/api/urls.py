from django.urls import path
from .views import get_data, get_items

urlpatterns = [
    path('api/data/', get_data),
    path('api/items/', get_items, name='get_items'),
]
