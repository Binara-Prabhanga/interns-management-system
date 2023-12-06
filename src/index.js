// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  root
);

reportWebVitals();
