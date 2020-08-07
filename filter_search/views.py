from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
import json
import ast
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
import calendar
from .models import SearchHistory

class UserSearchHistory(View):
    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request):

        search_history_all_obj= SearchHistory.objects.all()
        user_distinct= SearchHistory.objects.order_by().values('user').distinct()
        search_keyword_distinct=  SearchHistory.objects.order_by().values('search_keyword').distinct()

        context={
            'search_keywords': search_keyword_distinct,
            'users': user_distinct,
            'search_history_all_obj' : search_history_all_obj, 
        }
        return render(request, 'history_list.html', context)

    def post(self, request):
        if request.is_ajax():
            today = datetime.date.today()
            yesterday = today - datetime.timedelta(days=1)

            data= request.POST

            query= data.get('any_value_search')
            start= data.get('start')
            end= data.get('end')
            keyword= data.get('keyword')
            user= data.get('user')
            time_range= data.get('range')
            print(type(user))
   
            print(keyword, user, time_range, query, start, end)

            search_history_all_obj= SearchHistory.objects.all()
            
            if query:
                search_history_all_obj= search_history_all_obj.filter(
                    Q(user__icontains=query)|
                    Q(search_keyword__icontains=query)|
                    Q(search_engine_name__icontains=query)|
                    Q(search_keyword_language__icontains=query)
                )
            if keyword != "false":
                search_history_all_obj= search_history_all_obj.filter(search_keyword= keyword)
            
            if user != 'false':
                search_history_all_obj= search_history_all_obj.filter(user= keyword)

            if time_range != 'false':
                if int(time_range) == 1:
                    search_history_all_obj= search_history_all_obj.filer(search_time_range=[yesterday, today])
