const { gql } = require('apollo-server');

const typeDefs = gql`
type User {
  id:ID!,
  name:String,
  username:String,
  email:String,
  phone:String,
  gender: Gender,
  photos:[Photo!],
}
type Photo{
  id:ID!,
  url:String,
  info:String,
  user: User!,

}
input userInput {
  name:String,
  username:String,
  email:String,
  phone:String,
  gender: Gender,
}
enum Gender{
    M
    F

}

input photoInput {
  url:String,
  info:String,
}
  type Query {
    #user
    getUsers:[User]
    getuserById(id: ID!):User
    #photo
    getPhotos:[Photo]
    getPhotoById(id:ID!):Photo
  } 
  type Mutation {
   #user 
    createUser(input:userInput,photos:[photoInput]):User
     updateUser(input:userInput, id:ID!,photos:[photoInput]):User
     deleteUser(id:ID!): User
   #photo
     createPhoto(input:photoInput, user:ID):Photo
     updatePhoto(input:photoInput,id:ID!):Photo
     deletePhoto(id:ID!):Photo
  }
`;
module.exports = typeDefs;
