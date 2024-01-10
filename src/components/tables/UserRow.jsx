import React from 'react'

function UserRow({user}) {

    




  return (
    <tr id = {user.id}>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td className='d-flex justify-content-around'>
            <button onClick={ handleEdit } className='btn btn-secondary'>Edit</button>
            <button onClick= { handleDelete } className='btn btn-danger'>Delete</button>
        </td>

    </tr>
  )
}

export default UserRow