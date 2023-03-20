import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $userGender: String
    $userAge: Int
    $location: String
    $walkTimes: String
    $dogBreed: String
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
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      postText
    }
  }
`;
