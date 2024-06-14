# flashcards/models.py
from django.db import models
from users.models import CustomUser

class Flashcard(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    topic = models.CharField(max_length=255)
    prompt = models.CharField(max_length=255)
    content = models.TextField()
    frequency = models.IntegerField(default=0)
    pinyin = models.CharField(max_length=255)
    translation = models.CharField(max_length=255)
    example = models.CharField(max_length=255)
    example_translation = models.CharField(max_length=255)
    usage_notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.prompt