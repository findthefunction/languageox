// src/components/FlashcardList.js
import React, { useEffect, useState } from 'react';
import { fetchFlashcards } from '../api';

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetchFlashcards().then(response => {
      setFlashcards(response.data);
    });
  }, []);

  const readAloud = (text) => {
    axios.post('/ai/tts/', { text, language: 'zh' }, { responseType: 'blob' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const audio = new Audio(url);
        audio.play();
      });
  };

  return (
    <div>
      <h1>Flashcards</h1>
      <ul>
        {flashcards.map(flashcard => (
          <li key={flashcard.id}>
            {flashcard.content}
            <button onClick={() => readAloud(flashcard.content)}>Read Aloud</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardList;
