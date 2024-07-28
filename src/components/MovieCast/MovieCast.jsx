import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import { nanoid } from 'nanoid'; 
import s from './MovieCast.module.css';

const MovieCast = () => {
    const params = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCredits(params.movies_id).then(data => setCast(data));
    }, [params.movies_id]);
    
    console.log(cast);
    
    if (!cast) {
        return <h2>Loading...</h2>;
    }
    return (
        <div>
            {cast.map(item => (
            <div key = {nanoid()} className={s.actor}>
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