import { useState } from 'react'
import Title from "./components/Title";
import Form from './components/forms/Form';
import UserTable from './components/tables/UserTable';
function App() {

  const USERS = [
    {
      id: new Date().getTime() - Math.round(Math.random() * 1000),
      firstname: "Clément",
      lastname: "Toquet"
    },
    {
      id: new Date().getTime() - Math.round(Math.random() * 1000),
      firstname: "Florian",
      lastname: "Boismain"
    },
    {
      id: new Date().getTime() - Math.round(Math.random() * 1000),
      firstname: "Pacôme",
      lastname: "Perrichot"
    }
  ]


  const [users, setUsers] = useState(USERS);
  const [isFormEditActive, setIsFormEditActive] = useState(false)
  const [userToEdit, setUserToEdit] = useState(null)

  return (
    <div className='container'>
      <Title>CRUD App with Hooks</Title>
      <div className='row'>
        <Form isFormEditActive = { isFormEditActive } setIsFormEditActive = { setIsFormEditActive } 
          users = { users } setUsers = { setUsers } 
          userToEdit = { userToEdit } setUserToEdit = { setUserToEdit }
        />
        <UserTable isFormEditActive = {isFormEditActive} setIsFormEditActive = { setIsFormEditActive } 
          users = { users } setUsers = { setUsers } 
          setUserToEdit = { setUserToEdit }
        />
      </div>
    </div>
  )
}

export default App
