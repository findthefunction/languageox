// src/components/FlashcardList.js
import React, { useEffect, useState } from 'react';
import { fetchFlashcards } from '../api';  // Make sure to import fetchFlashcards function

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

  const readPinyinAloud = (pinyin) => {
    axios.post('/ai/tts/', { text: pinyin, language: 'zh' }, { responseType: 'blob' })
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
            <div>
              <strong>Prompt:</strong> {flashcard.prompt}
            </div>
            <div>
              <strong>Content:</strong> {flashcard.content}
            </div>
            <div>
              <strong>Pinyin:</strong> {flashcard.pinyin} <button onClick={() => readPinyinAloud(flashcard.pinyin)}>Read Aloud</button>
            </div>
            <div>
              <strong>Translation:</strong> {flashcard.translation}
            </div>
            <div>
              <strong>Example:</strong> {flashcard.example}
            </div>
            <div>
              <strong>Example Translation:</strong> {flashcard.example_translation}
            </div>
            <div>
              <strong>Usage Notes:</strong> {flashcard.usage_notes}
            </div>
            <button onClick={() => readAloud(flashcard.content)}>Read Aloud Content</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardList;
