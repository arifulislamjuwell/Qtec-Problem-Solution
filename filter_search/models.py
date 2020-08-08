from django.db import models

# Create your models here.
class SearchHistory(models.Model):
    user= models.CharField(max_length=50)
    search_keyword= models.CharField(max_length=100)
    search_time= models.DateField(auto_now_add=False)
    search_engine_name= models.CharField(max_length=50)
    search_keyword_language= models.CharField(max_length=50)
    result= models.CharField(max_length=200, null= True)

    def __str__(self):
        return self.user + ' ' + self.search_keyword