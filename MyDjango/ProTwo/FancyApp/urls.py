from django.urls import path
from django.conf.urls import include
from FancyApp import views

urlpatterns = [
    path('', views.fancy_clock, name='time')
]
