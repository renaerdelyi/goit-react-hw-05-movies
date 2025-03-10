import { useEffect, useState } from 'react';
import { getMovieCast } from '../../pages/common/Services/movieApi';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className={styles.castWrapper}>
      <h3 className={styles.castTitle}>Cast</h3>
      <div className={styles.castList}>
        {cast.map(actor => (
          <div key={actor.id} className={styles.castMember}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p className={styles.castMemberName}>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
