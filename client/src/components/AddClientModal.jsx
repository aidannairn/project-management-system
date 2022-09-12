import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'

const AddClientModal = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    console.log(firstName, lastName, email, phone)
  }

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addClientModal">
        <div className="d-flex align-items-center">
          <FaUser className='icon' />
          <div>Add Client</div>
        </div>
      </button>
      <div className="modal fade" id="addClientModal" aria-labelledby="addClientModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addClientModalLabel">Add Client</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className='form-label'>First Name</label>
                  <input type="text" className="form-control" id="name" value={firstName} onChange={ e => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className='form-label'>Last Name</label>
                  <input type="text" className="form-control" id="name" value={lastName} onChange={ e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className='form-label'>Phone</label>
                  <input type="text" className="form-control" id="name" value={phone} onChange={ e => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className='form-label'>Email</label>
                  <input type="text" className="form-control" id="name" value={email} onChange={ e => setEmail(e.target.value)} />
                </div>
                <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClientModal