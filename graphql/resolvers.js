import { getMovies } from "./db"

export const resolvers = {
    Query: {
        myMovies: (_, { limit, rating }) => getMovies(limit, rating),
    }
};

export default resolvers;

// export const resolvers = {
//     Query: {
//         people: () => people,
//         person: (_, { id }) => getById(id),
//         movies: () => getMovies(),
//         movie: (_, { id }) => getMovieById(id),
//     },
//     Mutation: {
//         addMovie: (_, { name, score }) => addMovie(name, score),
//         deleteMovie: (_, { id }) => deleteMovie(id),
//     }
// };

// export default resolvers;