import React, { useState, useEffect } from 'react';

export const MovieContext = React.createContext({
  movies: [],
  isLoading: false
});

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(movies => {
        setMovies(movies.results);
        setIsLoading(false);
      });
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        isLoading
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
