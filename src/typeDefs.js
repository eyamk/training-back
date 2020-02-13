const { gql } = require('apollo-server');

const typeDefs = gql`
type User {
  
  name:String,
  username:String,
  email:String,
  phone:String,

}

  type Query {
    me: String
    sayOk : String
    getuser:[User]
    getuserById(id:ID!):User
  }
  type Mutation {
    sayHi: String
    createUser(name:String,username:String,email:String,phone:String):User
     updateUser(name:String,username:String,email:String,phone:String, id:ID!):User
     deleteUser(id:ID!): String
  }
`;

module.exports = typeDefs;
