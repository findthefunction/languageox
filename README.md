### need to add details

{
  "content": "Sample content",
  "frequency": 4,
  "pinyin": "pinyin",
  "translation": "translation",
  "example": "example sentence",
  "example_translation": "example translation",
  "usage_notes": "usage notes"
}


## Generate a flashcard for the following prompt: "prompt"

Response should include:

- Content
- Frequency (0-5)
- Pinyin
- Translation
- Example sentence
- Example translation
- Usage notes

ollama create aya_flashcards -f ./Modelfile


# Language Learning App

## Overview
This project is a language learning application focused on creating and managing flashcards. The backend is powered by Django, the frontend is built with React, and we use PostgreSQL for the database. For generating flashcards, we integrate the Ollama Aya model via Docker.

## Features
- **User Authentication**: Manage user profiles and authentication.
- **Flashcard Management**: Create, view, and manage flashcards.
- **AI-Powered Flashcard Generation**: Use the Ollama Aya model to generate structured flashcards.
- **Text-to-Speech Functionality**: Read flashcards aloud.
- **Scalable Deployment**: Utilize Docker and Docker Swarm for easy deployment and scalability.

## Setup Instructions

### Prerequisites
- Python 3.x
- Node.js and npm
- Docker and Docker Compose
- Pipenv

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-repo/language-learning-app.git
cd language-learning-app

### Step 2: Set Up the Backend

