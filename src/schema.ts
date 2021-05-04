const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String
    createdAt: String
    updatedAt: String
    notes: [Note!]!
  }

  type Note {
    id: Int!
    title: String!
    content: String!
    createdAt: String
    updatedAt: String
    user: User!
  }

  type Query {
    user(id: Int!): User
    allNotes: [Note!]!
    note(id: Int!): Note
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createNote(userId: Int!, title: String!, content: String!): Note!
  }
`;

export default typeDefs;
