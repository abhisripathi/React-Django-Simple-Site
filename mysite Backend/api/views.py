
# Create your views here.
from django.http import JsonResponse

def get_data(request):
    data = {
        'message': 'Hello from Django API! This is my first end point to display HELLO message'
    }
    return JsonResponse(data)

# New function for /api/items/
def get_items(request):
    items = [
        {"id": 1, "name": "Book", "price": 12.99},
        {"id": 2, "name": "Laptop", "price": 999.99},
        {"id": 3, "name": "Smartphone", "price": 599.99},
    ]
    return JsonResponse({"items": items})
