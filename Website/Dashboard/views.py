from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView


# Create your views here.
def Home(request):
    return render(request, 'Frontpage.html' )

def Student(request):
    return render(request, 'Student_Page.html')