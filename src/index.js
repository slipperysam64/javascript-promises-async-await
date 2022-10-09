import { fetchWithTimeout, fetchBooks, fetchMovies } from './services';
const movies = require('./data/movies.json');

const getBooksAndMovies = () => {
    return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
        books, movies
    }))
    .catch(error => console.log("eror Fetching books and movies", error))
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then(results => {
    console.log('getBooksandMoviesPromise', results);
});


function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
    .then(results => results)
    .catch(error => {
        console.log('Error waiting for the promise race', error);
    });
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then(results => {
    console.log('getBooksOrMoviesPromise', results);
});
