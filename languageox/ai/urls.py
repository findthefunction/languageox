# ai/urls.py
from django.urls import path
from .views import TextToSpeechView

urlpatterns = [
    path('tts/', TextToSpeechView.as_view(), name='tts'),
]