import { getById, people } from "./db"

export const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
};

export default resolvers;