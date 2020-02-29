const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const cors = require('cors');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


const app = express();
app.use(cors());

const url = 'mongodb://localhost:27017/training';
const connect = mongoose.connect(url, { useNewUrlParser: true });
// eslint-disable-next-line no-console
connect.then(() => console.log('Connected to database'));

const server = new ApolloServer({ typeDefs, resolvers });

connect.then(() => {
  server.listen().then(({ url }));
});
