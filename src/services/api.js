import axios from 'axios';

  const options = {
  headers: {
          accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWNmNThmNWUyOTNmZmI0MDc1MzcxZmYyYmYwMTA3YyIsIm5iZiI6MTcyMTU5ODYzOS44MTE2ODksInN1YiI6IjY2OWQ4MGUxNTQyNzgxNjRlODhlZDM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.570xaigJo_IVqGU3ImneVcnJW4hc_CJlzZjMDV2r4ak'

        }
    };

export const fetchTrendingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const response = await axios.get(url, options);
  return response.data.results;
  };

export const fetchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, options);
  // console.log(response.data.results);
  return response.data.results;
};

export const fetchMovieDetails = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
  const response = await axios.get(url, options);
  console.log(response.data);
  return response.data;
};

export const fetchMovieCredits = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US&page=1`;
  const response = await axios.get(url, options);
  console.log(response.data.cast);
  return response.data.cast;
};

export const fetchMovieReviews = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`;
  const response = await axios.get(url, options);
  console.log(response.data.results);
  return response.data.results;
};
