from django.shortcuts import render
import datetime
# Create your views here.

def fancy_clock(request):
    fancy_clock_dict = { 'fancy_time' : f"You came here on {str(datetime.datetime.now())}"}
    return render(request, 'FancyApp/time.html', context = fancy_clock_dict)