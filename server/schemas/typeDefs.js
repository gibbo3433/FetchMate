const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    userGender: String
    userAge: Int
    location: String
    userBio: String
    userWalkTimes: String
    userDogName: String
    userDogBreed: String
    userDogAge: Int
    userDogBio: String
    posts: [Post]!
  }

  type Post {
    id: ID
    postText: String
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
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      userGender: String
      userAge: String
      location: String
      walkTimes: String
      dogBreeds: String
      userDogAge: String
      userDogName: String
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
