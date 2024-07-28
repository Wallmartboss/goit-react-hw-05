import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
// import s from './MovieCast.module.css';

const MovieCast = () => {
    const params = useParams();
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        fetchMovieCredits(params.movies_id).then(data => setCredits(data));
    }, [params.movies_id]);
    
    if (!credits) {
        return <h2>Loading...</h2>;
    }
    return (
        <div>
            <ul>
                {/* {credits.map(item => (
                    <li key={item.id}>{item.credit}</li> */}
                ))}
            </ul>
        </div>
    );
};

export default MovieCast