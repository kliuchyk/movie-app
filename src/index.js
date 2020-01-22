import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MoviesProvider from './providers/MovieProvider';

ReactDOM.render(
  <MoviesProvider>
    <App />
  </MoviesProvider>,
  document.getElementById('root')
);
