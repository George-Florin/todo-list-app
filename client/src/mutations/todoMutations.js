import { gql } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($title: String!, $description: String!, $date: String!) {
    addTodo(title: $title, description: $description, date: $date) {
      id
      title
      description
      date
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo(
    $id: ID!
    $title: String!
    $description: String!
    $date: String!
  ) {
    updateTodo(id: $id, title: $title, description: $description, date: $date) {
      id
      title
      description
      date
    }
  }
`;

export { ADD_TODO, DELETE_TODO, UPDATE_TODO };
