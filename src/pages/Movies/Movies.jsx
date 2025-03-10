import { useState } from 'react';
import { searchMovies } from '../../pages/common/Services/movieApi';
import { Link } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async event => {
    event.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className={styles.container}>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>

      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={styles.about}>
              <Link to={`/movies/${movie.id}/cast`}>Cast</Link>

              <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
