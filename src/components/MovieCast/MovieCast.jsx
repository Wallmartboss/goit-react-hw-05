import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
// import { nanoid } from 'nanoid'; 
import s from './MovieCast.module.css';

const MovieCast = () => {
    const { moviesId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCredits(moviesId).then(data => setCast(data)).catch(error => console.error(error)) ;
    }, [moviesId]);
    
    if (!cast.length) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className={s.wrapper}>
            {cast.map(item => (
            <div key = {item.id} className={s.actor}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                        width={200}
                        alt={item.name}
                    />
            <h3>{item.name}</h3>
            <p> Character:   <span>{item.character}</span></p>
            </div>   
             ))}
        </div>
    );
};

export default MovieCast