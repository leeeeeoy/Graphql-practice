// export const people = [
//     {
//         id: "1",
//         name: "leeeeeoy",
//         age: 22,
//         gender: "female",
//     },
//     {
//         id: "2",
//         name: "AAA",
//         age: 25,
//         gender: "male",
//     },
//     {
//         id: "3",
//         name: "BBB",
//         age: 23,
//         gender: "male",
//     },
//     {
//         id: "4",
//         name: "CCC",
//         age: 20,
//         gender: "female",
//     },
// ];

// let movies = [
//     {
//         id: 1,
//         name: "Avengers",
//         score: 10
//     },
//     {
//         id: 2,
//         name: "To you",
//         score: 19
//     },
//     {
//         id: 3,
//         name: "Lalaland",
//         score: 8
//     },
//     {
//         id: 4,
//         name: "Batman",
//         score: 50
//     },
//     {
//         id: 5,
//         name: "Superman",
//         score: 5
//     },
// ]


// export const getById = id => {
//     const filteredPeople = people.filter(person => person.id === String(id));
//     return filteredPeople[0]
// }

// export const getMovies = () => movies;

// export const getMovieById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0]
// }

// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if (movies.length > cleanedMovies.length) {
//         movies = cleanedMovies;
//         return true;
//     } else {
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: `${movies.length + 1}`,
//         name,
//         score,
//     };
//     movies.push(newMovie);
//     return newMovie;
// }


import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`
    }
    if (rating > 0) {
        REQUEST_URL += `minimum_rating=${rating}`
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies)
}