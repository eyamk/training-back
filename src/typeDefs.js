const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    me: String
  }
  type Mutation {
    sayHi: String
  }
`;

module.exports = typeDefs;
