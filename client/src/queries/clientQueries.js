import { gql } from '@apollo/client'

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export { GET_CLIENTS }