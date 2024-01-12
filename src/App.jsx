import { useState } from 'react'
import Title from "./components/Title";
import Form from './components/forms/Form';
import UserTable from './components/tables/UserTable';
import { UsersProvider } from './components/UsersProvider';


function App() {

  const [isFormEditActive, setIsFormEditActive] = useState(false)
  const [userToEdit, setUserToEdit] = useState(null)

  return (
    <div className='container'>
      <Title>CRUD App with Hooks</Title>
      <UsersProvider>
        <div className='row'>
          <Form isFormEditActive = { isFormEditActive } setIsFormEditActive = { setIsFormEditActive } 
            // users = { users } setUsers = { setUsers } 
            userToEdit = { userToEdit } setUserToEdit = { setUserToEdit }
          />
          <UserTable setIsFormEditActive = { setIsFormEditActive } 
            // users = { users } setUsers = { setUsers } 
            setUserToEdit = { setUserToEdit }
          />
        </div>
      </UsersProvider>
    </div>
  )
}

export default App
