import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../components/MovieReviews/MovieReviews'));

const App = () => {

  return (
    <div>
      <Suspense fallback={<h2>LOADING YOUR COMPONENT!</h2>}>
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
      
        <Route path='/movies/:movies_id' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast/>} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
        <Route path='*' element={<NotFoundPage />} />
       
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;