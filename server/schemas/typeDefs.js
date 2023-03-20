const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    userGender: String
    userAge: Int
    location: String
    walkTimes: String
    dogBreed: String
    dogAge: String
    dogName: String
    posts: [Post]!
  }

  type Post {
    id: ID
    postText: String
    location: [Float]!
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    posts: [Post]
    post(postId: ID!): Post
    postsByUser(username: String!): [Post]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      userGender: String
      userAge: Int
      location: String
      walkTimes: String
      dogBreed: String
      dogAge: String
      dogName: String
    ): Auth
    addPost(postText: String!): Post
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
