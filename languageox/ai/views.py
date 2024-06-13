from django.shortcuts import render

# ai/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from gtts import gTTS
import os

class TextToSpeechView(APIView):
    def post(self, request):
        text = request.data.get('text')
        language = request.data.get('language', 'zh')  # Mandarin by default
        if text:
            tts = gTTS(text=text, lang=language)
            tts.save("flashcard.mp3")
            with open("flashcard.mp3", "rb") as audio_file:
                return Response(audio_file.read(), content_type="audio/mp3")
        return Response({"error": "Text not provided"}, status=status.HTTP_400_BAD_REQUEST)

# ai/urls.py
from django.urls import path
from .views import TextToSpeechView

urlpatterns = [
    path('tts/', TextToSpeechView.as_view(), name='tts'),
]

# language_app/urls.py
urlpatterns = [
    ...
    path('api/ai/', include('ai.urls')),
]
