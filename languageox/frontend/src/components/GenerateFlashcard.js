// src/components/GenerateFlashcard.js
import React, { useState } from 'react';
import axios from '../api';

const GenerateFlashcard = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedFlashcard, setGeneratedFlashcard] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/ai/generate/', { prompt });
    if (response.status === 201) {
      setGeneratedFlashcard(response.data);
    }
  };

  const saveFlashcard = async () => {
    const response = await axios.post('/flashcards/', generatedFlashcard);
    if (response.status === 201) {
      // Handle success, e.g., show a message or update UI
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Prompt:</label>
          <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} required />
        </div>
        <button type="submit">Generate Flashcard</button>
      </form>

      {generatedFlashcard && (
        <div>
          <h2>Generated Flashcard</h2>
          <div><strong>Prompt:</strong> {generatedFlashcard.prompt}</div>
          <div><strong>Content:</strong> {generatedFlashcard.content}</div>
          <div><strong>Pinyin:</strong> {generatedFlashcard.pinyin}</div>
          <div><strong>Translation:</strong> {generatedFlashcard.translation}</div>
          <div><strong>Example:</strong> {generatedFlashcard.example}</div>
          <div><strong>Example Translation:</strong> {generatedFlashcard.example_translation}</div>
          <div><strong>Usage Notes:</strong> {generatedFlashcard.usage_notes}</div>
          <button onClick={saveFlashcard}>Save Flashcard</button>
        </div>
      )}
    </div>
  );
};

export default GenerateFlashcard;
