import React, { useContext } from 'react';
import { MovieContext } from './providers/MovieProvider';

function App() {
  const { movies } = useContext(MovieContext);

  return movies.map(({ id, title, overview, poster_path, backdrop_path }) => (
    <p>{title}</p>
  ));
}

export default App;
