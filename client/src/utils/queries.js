import { gql } from "@apollo/client";

export const QUERY_LOCAL_USERS = gql`
  query Users {
    users {
      _id
      username
      email
      userGender
      userAge
      location
      walkTimes
      dogBreed
      dogAge
      dogName
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $userGender: String!
    $userAge: Int!
    $location: String!
    $walkTimes: String!
    $dogBreed: String!
    $dogAge: String
    $dogName: String
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      userGender: $userGender
      userAge: $userAge
      location: $location
      walkTimes: $walkTimes
      dogBreed: $dogBreed
      dogAge: $dogAge
      dogName: $dogName
    ) {
      token
      user {
        _id
        username
        email
        userGender
        userAge
        location
        walkTimes
        dogBreed
        dogAge
        dogName
      }
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      userGender
      userAge
      location
      walkTimes
      dogBreed
      dogAge
      dogName
      posts {
        id
        postText
        createdAt
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      userGender
      userAge
      location
      walkTimes
      dogBreed
      dogAge
      dogName
      posts {
        id
        postText
        createdAt
        username
      }
    }
  }
`;
