import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
//   const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location?.state || '/movies');
  
const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
    
    useEffect(() => {
    fetchMovieDetails(params.movies_id).then(data => setMovie(data));
    }, [params.movies_id]);
    
  if (!movie) {
    return <h2>Loading...</h2>;
  }  
    
return (
    <div>
        <Link to={goBackRef.current} className={s.btn_back}> Go back </Link>
        <div className={s.wrapper}>
            <p className={s.text}>Movie details #{params.movies_id}</p>
            <img src={
                movie.backdrop_path ?
                    `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                    : defaultImg}
            width={500}
            alt="poster"/>
      <div className={s.info_movie}>
        <h2>  {movie.title} </h2>
                <p className={s.subtitle}> Release date </p>
                <p>{movie.release_date}</p> 
                <p className={s.subtitle}>Overview:</p>
                <p>{movie.overview}</p>
                <p className={s.subtitle}> Genre </p>
                 <p>   {movie.genres.map(genre => (
                        <span key={movie.imdb_id}>
                            <span> {genre.name}</span> </span>))} </p>
                
       </div>
        <div className={s.addit_data}>
            <NavLink to='cast'>Cast</NavLink>
             <NavLink to='reviews'>Reviews</NavLink>
         </div>
      <Suspense fallback={<h2>Second suspense loader</h2>}>
        <Outlet />
      </Suspense>
    </div>
    </div>
  );
};

export default MovieDetailsPage