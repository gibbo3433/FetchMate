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
      userBio
      userWalkTimes
      userDogName
      userDogBreed
      userDogAge
      userDogBio
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $userGender: String!
    $userAge: String!
    $location: String!
    $WalkTimes: String!
    $dogBreeds: String!
    $userDogAge: String
    $userDogName: String
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      userGender: $userGender
      userAge: $userAge
      location: $location
      WalkTimes: $WalkTimes
      dogBreeds: $dogBreeds
      userDogAge: $userDogAge
      userDogName: $userDogName
    ) {
      token
      user {
        _id
        username
        email
        userGender
        userAge
        location
        WalkTimes
        dogBreeds
        userDogAge
        userDogName
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
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
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
