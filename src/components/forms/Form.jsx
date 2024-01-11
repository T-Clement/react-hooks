import React from 'react'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

function Form({users, setUsers, isFormEditActive, setIsFormEditActive, userToEdit, setUserToEdit}) {
  // console.log(userToEdit.id);
  // if(userToEdit) {
  //   console.log(userToEdit.id);
  // }
  return (

    <div className='col-6'>
      { 
        isFormEditActive ? 
          <EditUserForm 
            setIsFormEditActive = { setIsFormEditActive } 
            userToEdit = { userToEdit } setUserToEdit = { setUserToEdit }
          /> : 
          <AddUserForm />
      }

    </div>


    
  )
}

export default Form