import React from 'react'
import AddUser from './AddUser'
import EditUser from './EditUser'

function Form({users, setUsers, isFormEditActive, setIsFormEditActive, userToEdit, setUserToEdit}) {
  return (

    <div className='col-6'>
      { 
        isFormEditActive ? 
          <EditUser users = { users } setUsers = { setUsers } 
            setIsFormEditActive = {setIsFormEditActive} 
            userToEdit = { userToEdit } setUserToEdit = { setUserToEdit }
          /> : 
          <AddUser users = { users } setUsers = { setUsers } />
    }
    </div>


    
  )
}

export default Form