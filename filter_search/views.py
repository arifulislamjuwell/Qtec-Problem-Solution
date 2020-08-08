
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
import json
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt

from .utils.time_converstion import last_week_saturday, last_week_friday, last_month, last_year, yesterday_str, today_str
from .models import SearchHistory

class UserSearchHistory(View):
    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request):

        search_history_all= SearchHistory.objects.all()
        user_distinct= SearchHistory.objects.order_by().values('user').distinct()
        search_keyword_distinct=  SearchHistory.objects.order_by().values('search_keyword').distinct()

        #updated all keyword with cunnt separated keyword
        count=0 
        for i in search_keyword_distinct:
            search_keyword= SearchHistory.objects.filter(search_keyword= i['search_keyword'])
            length_search_keyword= len(search_keyword)
            search_keyword_distinct[count]['count']= length_search_keyword
            count+=1

        context={
            'search_keywords': search_keyword_distinct,
            'users': user_distinct,
            'search_history_all_obj' : search_history_all, 
        }
        return render(request, 'history_list.html', context)

    def post(self, request):
        if request.is_ajax():
            data= request.POST

            query= data.get('any_value_search')
            start= data.get('start')
            end= data.get('end')
            keyword= data.get('keyword')
            user= data.get('user')
            time_range= data.get('range')

            search_history_all_obj= SearchHistory.objects.all()

            if query:
                search_history_all_obj= search_history_all_obj.filter(
                    Q(user__icontains=query)|
                    Q(search_keyword__icontains=query)|
                    Q(search_engine_name__icontains=query)|
                    Q(search_keyword_language__icontains=query)
                )

            #false mean not selected this filter/ default selected value is 'false'
            if keyword != "false":
                search_history_all_obj= search_history_all_obj.filter(search_keyword= keyword)
            
            if user != 'false':
                search_history_all_obj= search_history_all_obj.filter(user= user)

            if time_range != 'false':
                if int(time_range) == 1:
                    search_history_all_obj= search_history_all_obj.filter(search_time__range=[yesterday_str(), today_str()])

                elif int(time_range) == 2:
                    search_history_all_obj= search_history_all_obj.filter(search_time__range=[last_week_saturday(), last_week_friday()])

                elif int(time_range) == 3:
                    search_history_all_obj= search_history_all_obj.filter(search_time__year=last_year(), search_time__month= last_month())
                    print(search_history_all_obj)
            
            if start and end:
                search_history_all_obj= search_history_all_obj.filter(search_time__range=[start, end])

            data= search_history_all_obj.values('user', 'search_keyword', 'search_time', 'search_engine_name', 'search_keyword_language', 'result')
            return JsonResponse([i for i in data], safe= False)