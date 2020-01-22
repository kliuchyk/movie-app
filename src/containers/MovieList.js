import React, { useContext } from 'react';
import { MovieContext } from '../providers/MovieProvider';
import Movie from '../ui/Movie';

export default function MovieList() {
  const { movies, isLoading } = useContext(MovieContext);

  if (isLoading) return <div>Loading...</div>;

  return movies.map(({ id, title, overview, poster_path, backdrop_path }) => {
    return (
      <Movie
        id={id}
        key={id}
        title={title}
        overview={overview}
        posterPath={poster_path}
        backdropPath={backdrop_path}
      />
    );
  });
}
