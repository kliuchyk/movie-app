import React, { useContext } from 'react';
import { MovieContext } from '../providers/MovieProvider';

export default function MovieList() {
  const { movies, isLoading } = useContext(MovieContext);

  if (isLoading) return <div>Loading...</div>;

  return movies.map(({ id, title, overview, poster_path, backdrop_path }) => {
    return <p>{title}</p>;
  });
}
