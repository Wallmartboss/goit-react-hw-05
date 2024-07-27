import axios from 'axios';

  const options = {
  headers: {
          accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWNmNThmNWUyOTNmZmI0MDc1MzcxZmYyYmYwMTA3YyIsIm5iZiI6MTcyMTU5ODYzOS44MTE2ODksInN1YiI6IjY2OWQ4MGUxNTQyNzgxNjRlODhlZDM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.570xaigJo_IVqGU3ImneVcnJW4hc_CJlzZjMDV2r4ak'

        }
    };

export const fetchTrendingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  // const options = {
  // headers: {
  //         accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWNmNThmNWUyOTNmZmI0MDc1MzcxZmYyYmYwMTA3YyIsIm5iZiI6MTcyMTU5ODYzOS44MTE2ODksInN1YiI6IjY2OWQ4MGUxNTQyNzgxNjRlODhlZDM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.570xaigJo_IVqGU3ImneVcnJW4hc_CJlzZjMDV2r4ak'

  //       }
  //   };
  const response = await axios.get(url, options);
  return response.data.results;
  };

export const fetchMovies = async () => {
    const url = 'https://api.themoviedb.org/3/search/movie?language=en-US';

const response = await axios.get(url, options);
  return response.data.results;
};

// export const fetchMovieDetails = () => {
//     const url = 'https://api.themoviedb.org/3/movie/{movie_id}?language=en-US';

//       axios.get(url, options)
//         .then(response => { return response.data })
//         .catch(err => console.error(err));
// };

// export const fetchMovieCredits = () => {
//     const url = 'https://api.themoviedb.org/3/movie/{movie_id}/credits?language=en-US';

//       axios.get(url, options)
//         .then(response => { return response.data })
//         .catch(err => console.error(err));
// };

// export const fetchMovieReviews = () => {
//     const url = 'https://api.themoviedb.org/3/movie/{movie_id}/reviews?language=en-US';

//       axios.get(url, options)
//         .then(response => { return response.data })
//         .catch(err => console.error(err));
// };
