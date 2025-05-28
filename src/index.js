// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // optional, if you have global styles
import App from './App';

// Redirect to index_with_music.html on load
window.location.href = '/index_with_music.html';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
