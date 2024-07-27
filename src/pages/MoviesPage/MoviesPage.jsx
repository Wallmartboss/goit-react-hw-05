import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../services/api';
import s from './MoviesPage.module.css'


const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useSearchParams();
    // const [searchParams, setSearchParams] = useSearchParams();
  // const filterValue = searchMovies.get('query') ?? '';
    // const location = useLocation();
  // console.log(location);
        
  const handleChangeFilter = newValue => {
    setSearchQuery(newValue);
    console.log(searchQuery);
    if (!newValue) {
      // Очистка URL від некрасивого параметру
      setSearchMovies({});
    } else {
      setSearchMovies({ query: newValue });
    }
  };

useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery).then(data => setSearchMovies(data));
    } else
    { setSearchMovies({}); }
  }, [searchQuery, setSearchMovies]);

  //   searchMovies.set('query', newValue);
  //          setSearchMovies(searchMovies);
  //        console.log(searchMovies);
  // };

  //    const filteredData = searchMovies.filter(
  //   item =>
  //     item.title.toLowerCase().includes(filterValue.toLowerCase())
     
  // );
    
    // if (!searchMovies.lenght) {
    //     console.log(searchMovies);
    //     return (<h2>Type keyword for search movies </h2>)
    // }
    
 
        return (
            <div>
                <Navigation />
                <input className={s.input}
                value={searchQuery}
                placeholder='Search'
                type='search'
                onChange={e => handleChangeFilter(e.target.value)}
            />
            <button type="submit" className={s.btn} > Search</button>
                <h2>Finded movies: </h2>
            {/* {searchMovies && */}
              {/* <MovieList typeMovies={searchMovies} /> */}
            </div>
        );
    };

  export default MoviesPage;