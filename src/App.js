import React from 'react';
import MoviesProvider from './providers/MovieProvider';
import FavoritesProvider from './providers/FavoritesProvider';
import MovieList from './containers/MovieList';
import { PageHeader } from 'antd';

function App() {
  return (
    <MoviesProvider>
      <FavoritesProvider>
        <PageHeader className="page-header" title="MovieApp" />
        <div className="content">
          <MovieList />
        </div>
      </FavoritesProvider>
    </MoviesProvider>
  );
}

export default App;
