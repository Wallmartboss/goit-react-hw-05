import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/api';
import s from './HomePage.module.css'



const HomePage = () => {
     
    const [trendingMovies, setTrendingMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies().then(data => setTrendingMovies(data));
    }, []);
     
    return (
        <div>
            <p className={s.title}>Trending today </p>
            <MovieList typeMovies={trendingMovies} />
        </div>
    );
};

export default HomePage