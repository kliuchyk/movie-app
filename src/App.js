import React, { useContext } from 'react';
import { MovieContext } from './providers/MovieProvider';
import MoviesProvider from './providers/MovieProvider';
import MovieList from './containers/MovieList';

function App() {
  return (
    <MoviesProvider>
      <MovieList />
    </MoviesProvider>
  );
}

export default App;
