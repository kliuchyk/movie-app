import React from 'react';
import MoviesProvider from './providers/MovieProvider';
import MovieList from './containers/MovieList';

function App() {
  return (
    <MoviesProvider>
      <div className="content">
        <MovieList />
      </div>
    </MoviesProvider>
  );
}

export default App;
