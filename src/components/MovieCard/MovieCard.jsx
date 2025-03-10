import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />

      <Link to={`/movies/${movie.id}/cast`}>Cast</Link>

      <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
    </div>
  );
};

export default MovieCard;
