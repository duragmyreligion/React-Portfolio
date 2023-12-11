// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render to render your app
root.render(<React.StrictMode><App /></React.StrictMode>);