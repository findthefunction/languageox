from django.shortcuts import render

# Create # flashcards/views.py
from rest_framework import viewsets
from .models import Flashcard
from .serializers import FlashcardSerializer

class FlashcardViewSet(viewsets.ModelViewSet):
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer
