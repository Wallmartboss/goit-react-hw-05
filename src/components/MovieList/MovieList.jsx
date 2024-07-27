import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css'

const MovieList = ({ typeMovies }) => {
    const location = useLocation();

    return (
        <div>
            <ul className={s.list}>
                {typeMovies.map(movie => (
                    <li key={movie.id} className={s.item}>
                        <Link to={movie.id.toString()} state={location}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MovieList