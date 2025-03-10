import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../pages/common/Services/movieApi';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={styles.reviewsWrapper}>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.id} className={styles.review}>
            <p className={styles.reviewAuthor}>By {review.author}</p>
            <p className={styles.reviewContent}>{review.content}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
