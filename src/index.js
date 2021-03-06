import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/style.css';
import Home from './components/home/home';
import reportWebVitals from './reportWebVitals';
import './i18n';


ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Home />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
