import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
// import { nanoid } from 'nanoid'; 
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { moviesId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(moviesId).then(data => setReviews(data)).catch(error => console.error(error));
    }, [moviesId]);
    
    if (!reviews) {
        return <h2>Loading...</h2>;
  }
  if (!reviews.length) {
    return <h2> No reviews for this movie</h2>
  }

    return (
      <div>
  
            {reviews.map(item => (
            <div key = {item.id} className={s.review}>
            <h3>{item.author}</h3>
            <p> {item.content}</p>
            </div>   
             ))}
        </div>
    );
};

export default MovieReviews