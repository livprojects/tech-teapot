import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import './styles/style.css';
import Home from './components/home/home';
import './i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Router>
);
