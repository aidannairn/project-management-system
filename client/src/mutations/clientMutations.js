import { gql } from '@apollo/client'

const ADD_CLIENT = gql`
  mutation addClient($firstName: String!, $lastName: String!, $email: String!, $phone: String!) {
    addClient(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone)
    {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export { ADD_CLIENT, DELETE_CLIENT }