from django.urls import path
from .views import UserSearchHistory

app_name = 'filter_search'

urlpatterns = [
    path('user-search-history/', UserSearchHistory.as_view(), name= "user_search_history")
]
