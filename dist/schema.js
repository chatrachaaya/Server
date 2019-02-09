'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var _resolver = require('./resolver');

var typeDefs = '\n\ntype Place {\n    _id: ID!\n    title: String!\n    price: Int\n}\n\ntype Query{\n    getPlace(_id: ID!) : Place\n    allPlaces: [Place]\n}\n\ninput PlaceInput {\n    title: String!\n    price: Int\n}\n\ntype Mutation {\n    createPlace (input: PlaceInput) : Place\n    updatePlace(_id: ID!, input: PlaceInput): Place\n    deletePlace(_id:ID!): Place\n}\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: typeDefs,
    resolvers: _resolver.resolvers
});

exports.default = schema;