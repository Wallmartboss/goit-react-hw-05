import axios from 'axios';

 const options = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWNmNThmNWUyOTNmZmI0MDc1MzcxZmYyYmYwMTA3YyIsIm5iZiI6MTcyMTU5ODUwNC4yMDYyMDMsInN1YiI6IjY2OWQ4MGUxNTQyNzgxNjRlODhlZDM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fd2uXJye6RgT6K0kwetKfj6wspndImD8krthmha0FOU'
        }
    };

export const fetchTrendingMovies = () => {
    const url = 'https://api.themoviedb.org/3/search/trending/movie/week?include_adult=false&language=en-US&page=1';

      axios.get(url, options)
        .then(response => { return response.data })
        .catch(err => console.error(err));
};

export const fetchMovies = () => {
    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

     axios.get(url, options)
        .then(response => { return response.data })
        .catch(err => console.error(err));
};

export const fetchMovieDetails = () => {
    const url = 'https://api.themoviedb.org/3/movie/{movie_id}?language=en-US';

      axios.get(url, options)
        .then(response => { return response.data })
        .catch(err => console.error(err));
};

export const fetchMovieCredits = () => {
    const url = 'https://api.themoviedb.org/3/movie/{movie_id}/credits?language=en-US';

      axios.get(url, options)
        .then(response => { return response.data })
        .catch(err => console.error(err));
};

export const fetchMovieReviews = () => {
    const url = 'https://api.themoviedb.org/3/movie/{movie_id}/reviews?language=en-US';

      axios.get(url, options)
        .then(response => { return response.data })
        .catch(err => console.error(err));
};
