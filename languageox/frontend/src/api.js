// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const fetchFlashcards = () => api.get('/flashcards/');
export const createFlashcard = (data) => api.post('/flashcards/', data);
export const fetchUser = () => api.get('/users/me/');

export default api;
