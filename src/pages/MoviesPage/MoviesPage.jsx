import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../services/api';
import s from './MoviesPage.module.css'



const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const notify = () => toast('Please, fill keyword for searching...');

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    setSearchValue(query);
    const getMovies = async () => {
      try {
        const data = await fetchMovies(query);
        setSearchMovies(data);
      }
      catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
      getMovies();
        }, [query]);
  

const handleSubmit = event => {
  event.preventDefault();
  if (!searchValue) { notify(); return }
  setSearchParams({ query: searchValue });
};
  

    return (
      <div>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            className={s.input}
            value={searchValue}
            placeholder="Search"
            type="search"
            onChange={e => setSearchValue(e.target.value)}
          />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </form>
        <Toaster />
        <MovieList typeMovies={searchMovies} />
      </div>
    );
  };

export default MoviesPage;