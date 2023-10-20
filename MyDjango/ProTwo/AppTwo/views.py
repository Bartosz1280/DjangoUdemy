from django.shortcuts import render
from django.http import HttpResponse

def index(response):

    return HttpResponse("<em> My Second App </em>")

def help(request):

    help_dict = {"HelpPage": " You are here because you requested a help!"}
    return render(request, "AppTwo/help.html", context=help_dict)
    
# Create your views here.
