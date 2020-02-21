const Query = require('./Query');
const Mutation = require('./Mutation');

/* const TypeResolvers = {
  User: {
    photo: (root) => {
      // console.log(root)
      return (root.photo)
    }
  },
} */
const resolvers = {
  Query,
  Mutation,
  // ...TypeResolvers,
};

module.exports = resolvers;
