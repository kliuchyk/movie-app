import React from 'react';
import MoviesProvider from './providers/MovieProvider';
import FavoritesProvider from './providers/FavoritesProvider';
import MovieList from './containers/MovieList';

function App() {
  return (
    <MoviesProvider>
      <FavoritesProvider>
        <div className="content">
          <MovieList />
        </div>
      </FavoritesProvider>
    </MoviesProvider>
  );
}

export default App;
