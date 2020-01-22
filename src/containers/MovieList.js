import React, { useContext } from 'react';
import { MovieContext } from '../providers/MovieProvider';
import { FavoritesContext } from '../providers/FavoritesProvider';
import Movie from '../ui/Movie';

export default function MovieList() {
  const { movies, isLoading } = useContext(MovieContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoritesContext
  );

  if (isLoading) return <div>Loading...</div>;

  return movies.map(({ id, title, overview, poster_path, backdrop_path }) => {
    const isFavorite = favorites.has(id);

    return (
      <Movie
        id={id}
        key={id}
        title={title}
        overview={overview}
        posterPath={poster_path}
        backdropPath={backdrop_path}
        isFavorite={isFavorite}
        handleFavoriteIconClick={
          isFavorite ? removeFromFavorites : addToFavorites
        }
      />
    );
  });
}
