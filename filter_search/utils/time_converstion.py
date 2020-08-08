from django.utils import timezone
from datetime import timedelta
from datetime import datetime, date, timedelta

today = date.today()
today_toordinal = today.toordinal()
lastWeek = today_toordinal-7
sunday = lastWeek - (lastWeek % 7)

def yesterday_str():
    yesterday = today - timedelta(days=1)
    return yesterday.strftime("%Y-%m-%d")

def today_str():
    return today.strftime("%Y-%m-%d")

def last_week_saturday():
    saturday = sunday + 6
    return date.fromordinal(saturday)

def last_week_friday():
    friday= sunday + 12
    return date.fromordinal(friday)


def last_month():
    first = today.replace(day=1)
    lastMonth = first - timedelta(days=1)
    return lastMonth.strftime("%m")

def last_year():
    first = today.replace(day=1)
    lastMonth = first - timedelta(days=1)
    return lastMonth.strftime("%Y")
