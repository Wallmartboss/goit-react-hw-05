import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Navigation from '../../components/Navigation/Navigation';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../services/api';
import s from './MoviesPage.module.css'



const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const history = useHistory();
  const notify = () => toast('Please, fill keyword for searching...');

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    setSearchValue(query);
  }, [searchParams]);

  const handleSubmit = async event => {
    event.preventDefault();
    if (!searchValue) { notify(); return }
     try {
      const data = await fetchMovies(searchValue);
      console.log(data);
       setSearchMovies(data);
       searchParams.set('query', searchValue);
       setSearchParams(searchParams);
      //  history.push(`?query=${encodeURIComponent(searchValue)}`);
        }
    catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

    return (
      <div>
        <Navigation />
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