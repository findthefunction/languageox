# ai/urls.py
from django.urls import path
from .views import TextToSpeechView, GenerateFlashcardView

urlpatterns = [
    path('tts/', TextToSpeechView.as_view(), name='tts'),
    path('generate/', GenerateFlashcardView.as_view(), name='generate_flashcard'),
]
