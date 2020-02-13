const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


const url = "mongodb://localhost:27017/training";
const connect = mongoose.connect(url,{ useNewUrlParser: true });
connect.then(()=> console.log('Connected'))
 
const server = new ApolloServer({ typeDefs, resolvers });

connect.then(()=> {
server.listen().then(({ url }) => console.log(url));
})


