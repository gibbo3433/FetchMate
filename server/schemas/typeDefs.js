const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]!
  }

  type Dog {
    _id: ID
    title: String
    description: String
    image: String
    price: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    categories: [Category]
    category(name: String!): Category
    me: User
    dogs: [Dog]
    dog(dogId: ID!): Dog
    orders: [Order]
    order(orderId: ID!): Order
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    newOrder(customerName: String!, customerAddress: String!, items: String!, total: Int!): Order
  }
`;

module.exports = typeDefs;
