import { gql } from '@apollo/client';

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

export const QUERY_CATEGORIES = gql`
query Categories {
  categories {
    name
  }
}
`;

export const QUERY_SINGLE_CATEGORY = gql`
query Category($name: String!) {
  category(name: $name) {
    name
    dogs {
      _id
      title
      description
      image
      price
    }
  }
}
`;

export const QUERY_SINGLE_DOG = gql`
query Dog($dogId: ID!) {
  dog(dogId: $dogId) {
    _id
    createdAt
    description
    image
    price
    title
  }
}
`;

export const QUERY_FEATURED_DOGS = gql`
query Dogs {
  dogs {
    _id
    title
    description
    image
    price
    createdAt
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
