// src/router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={FlashcardList} />
      {/* Add more routes as needed */}
    </Switch>
  </Router>
);

export default AppRouter;
