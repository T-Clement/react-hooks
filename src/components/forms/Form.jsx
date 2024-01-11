import React from 'react'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

function Form({users, setUsers, isFormEditActive, setIsFormEditActive, userToEdit, setUserToEdit}) {
  return (

    <div className='col-6'>
      { 
        isFormEditActive ? 
          <EditUserForm users = { users } setUsers = { setUsers } 
            setIsFormEditActive = {setIsFormEditActive} 
            userToEdit = { userToEdit } setUserToEdit = { setUserToEdit }
          /> : 
          <AddUserForm users = { users } setUsers = { setUsers } />
    }
    </div>


    
  )
}

export default Form