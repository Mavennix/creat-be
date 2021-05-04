import express from "express";
import { ApolloServer } from "apollo-server-express";
// const sqlite3 = require('sqlite3').verbose();
import typeDefs from "./src/schema";
import resolvers from "./src/resolver";

// const typeDefs = require('./schema')
// const resolvers = require('./resolvers')
const models = require("./models");

// Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
