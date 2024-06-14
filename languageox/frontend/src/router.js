// src/router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';
import CreateFlashcard from './components/CreateFlashcard';
import GenerateFlashcard from './components/GenerateFlashcard';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={FlashcardList} />
      <Route path="/create-flashcard" component={CreateFlashcard} />
      <Route path="/generate-flashcard" component={GenerateFlashcard} />
    </Switch>
  </Router>
);

export default AppRouter;