import React from 'react';
import MovieCard from './MovieCard';

const sampleMovies = [
  {
    Title: 'Inception',
    Year: '2010',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/I/71pCe3kYJyL._AC_SY679_.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
  },
  {
    Title: 'The Matrix',
    Year: '1999',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
  },
  {
    Title: 'Spider-Man: No Way Home',
    Year: '2021',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
  },
];

const MovieGallery = () => {
  return (
    <div className="movie-grid">
      {sampleMovies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieGallery;
