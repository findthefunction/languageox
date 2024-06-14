# ai/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from gtts import gTTS
from flashcards.models import Flashcard
from flashcards.serializers import FlashcardSerializer
import requests

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

class GenerateFlashcardView(APIView):
    def post(self, request):
        prompt = request.data.get('prompt')
        user = request.user

        # Call the local Ollama model API to generate flashcard
        response = requests.post(
            'http://localhost:8000/ollama-api/generate',
            json={'prompt': prompt}
        )
        
        if response.status_code == 200:
            generated_data = response.json()

            # Ensure the response fits into the predefined structure
            flashcard_data = {
                "user": user.id,
                "topic": "General",
                "prompt": prompt,
                "content": generated_data.get('content', ''),
                "frequency": generated_data.get('frequency', 0),  # Adjust based on your logic
                "pinyin": generated_data.get('pinyin', ''),
                "translation": generated_data.get('translation', ''),
                "example": generated_data.get('example', ''),
                "example_translation": generated_data.get('example_translation', ''),
                "usage_notes": generated_data.get('usage_notes', ''),
            }
            
            serializer = FlashcardSerializer(data=flashcard_data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Failed to generate flashcard"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



