import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../services/api';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
   const [searchMovies, setSearchMovies] = useSearchParams();
    // const [searchParams, setSearchParams] = useSearchParams();
    const filterValue = searchMovies.get('query') ?? '';
    const location = useLocation();
  console.log(location);
     useEffect(() => {
        fetchMovies().then(data => setSearchMovies(data));
     }, []);
      const handleChangeFilter = newValue => {
    if (!newValue) {
      // Очистка URL від некрасивого параметру
      return setSearchMovies({});
    }

    setSearchMovies.set('query', newValue);

    setSearchMovies(searchMovies);
  };

//      const filteredData = searchMovies.filter(
//     item =>
//       item.title.toLowerCase().includes(filterValue.toLowerCase())
     
//   );
    
    // if (!searchMovies.lenght) {
    //     console.log(searchMovies);
    //     return (<h2>Type keyword for search movies </h2>)
    // }
    
        console.log(searchMovies);
        return (
            <div>
                <Navigation />
                <input
                 value={filterValue}
                 placeholder='Search'
                 type='search'
                 onChange={e => handleChangeFilter(e.target.value)}
                />
                <h2>Finded movies: </h2>
                {searchMovies && <MovieList typeMovies={searchMovies} />}
            </div>
        );
    };

export default MoviesPage