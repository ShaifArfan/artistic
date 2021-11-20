import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'normalize.css/normalize.css';
import { ThemeContextProvider } from './contexts/ThemeContext.js';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
