import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'

import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECTS } from '../queries/projectQueries'
// import { GET_CLIENTS } from '../queries/clientQueries'

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // Refresh frontend after user has been removed (can slow down application is used too much)
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }]
    /* update(cache, { data: { deleteClient }}) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS
      })
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter(client => client.id !== deleteClient.id)
        }
      })
    } */
  })

  return (
    <tr>
      <td>{client.firstName} {client.lastName}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  )
}

export default ClientRow