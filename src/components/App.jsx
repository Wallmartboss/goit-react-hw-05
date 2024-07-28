// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
      
        <Route path='/movies/:movies_id' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast/>} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
        <Route path='*' element={<NotFoundPage />} />
       
        </Routes>
    </div>
  );
};

export default App;