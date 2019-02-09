import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolver'

const typeDefs = `

type Place {
    _id: ID!
    title: String!
    price: Int
}

type Query{
    getPlace(_id: ID!) : Place
    allPlaces: [Place]
}

input PlaceInput {
    title: String!
    price: Int
}

type Mutation {
    createPlace (input: PlaceInput) : Place
    updatePlace(_id: ID!, input: PlaceInput): Place
    deletePlace(_id:ID!): Place
}
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;