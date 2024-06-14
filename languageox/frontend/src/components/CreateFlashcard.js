// src/components/CreateFlashcard.js
import React, { useState } from 'react';
import axios from '../api';

const CreateFlashcard = () => {
  const [topic, setTopic] = useState('');
  const [prompt, setPrompt] = useState('');
  const [content, setContent] = useState('');
  const [frequency, setFrequency] = useState(0);
  const [pinyin, setPinyin] = useState('');
  const [translation, setTranslation] = useState('');
  const [example, setExample] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');
  const [usageNotes, setUsageNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/flashcards/', {
      topic,
      prompt,
      content,
      frequency,
      pinyin,
      translation,
      example,
      example_translation: exampleTranslation,
      usage_notes: usageNotes
    });
    if (response.status === 201) {
      setTopic('');
      setPrompt('');
      setContent('');
      setFrequency(0);
      setPinyin('');
      setTranslation('');
      setExample('');
      setExampleTranslation('');
      setUsageNotes('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Topic:</label>
        <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required />
      </div>
      <div>
        <label>Prompt:</label>
        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} required />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
      </div>
      <div>
        <label>Frequency:</label>
        <input type="number" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
      </div>
      <div>
        <label>Pinyin:</label>
        <input type="text" value={pinyin} onChange={(e) => setPinyin(e.target.value)} required />
      </div>
      <div>
        <label>Translation:</label>
        <input type="text" value={translation} onChange={(e) => setTranslation(e.target.value)} required />
      </div>
      <div>
        <label>Example:</label>
        <input type="text" value={example} onChange={(e) => setExample(e.target.value)} required />
      </div>
      <div>
        <label>Example Translation:</label>
        <input type="text" value={exampleTranslation} onChange={(e) => setExampleTranslation(e.target.value)} required />
      </div>
      <div>
        <label>Usage Notes:</label>
        <textarea value={usageNotes} onChange={(e) => setUsageNotes(e.target.value)} required></textarea>
      </div>
      <button type="submit">Create Flashcard</button>
    </form>
  );
};

export default CreateFlashcard;
