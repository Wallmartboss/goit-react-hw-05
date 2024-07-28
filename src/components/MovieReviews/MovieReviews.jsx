import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import { nanoid } from 'nanoid'; 
import s from './MovieReviews.module.css';

const MovieReviews = () => {
    const params = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(params.movies_id).then(data => setReviews(data));
    }, [params.movies_id]);
    
    if (!reviews) {
        return <h2>Loading...</h2>;
  }
  if (!reviews.length) {
    return <h2> No reviews for this movie</h2>
  }

    return (
      <div>
  
            {reviews.map(item => (
            <div key = {nanoid()} className={s.review}>
            <h3>{item.author}</h3>
            <p> {item.content}</p>
            </div>   
             ))}
        </div>
    );
};

export default MovieReviews