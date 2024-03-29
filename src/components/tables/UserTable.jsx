import React, { useContext } from 'react'
import { UsersContext } from '../UsersProvider';
function UserTable({ setIsFormEditActive, setUserToEdit}) {

    // STATES

    const {users, setUsers} = useContext(UsersContext);


    // COMPORTEMENTS
    const handleDelete = (id) => {
        console.log("Delete : " + id);
        const newUsers = users.filter((user) => id != user.id);
        setUsers(newUsers);
    }

    const handleEdit = (user) => {
        setUserToEdit(null)
        // console.log("Edit : ");
        // console.log(user);
        setIsFormEditActive(true);
        setUserToEdit(user);
    }


    // AFFICHAGE


  return (
    <div className='col-6'>
        <h2>View Users</h2>

        <table className='table'>
            <thead>
                <tr>
                    <th scope = "col">Firstname</th>
                    <th scope = "col">Lastname</th>
                    <th scope = "col">Actions</th>
                </tr>
            </thead>
            <tbody>

                { users.map((user) => 
                    <tr key = {user.id}  id = {user.id}>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td className='d-flex justify-content-around'>
                            <button onClick = {() => handleEdit(user) } className='btn btn-secondary'>Edit</button>
                            <button onClick = { () => handleDelete(user.id) } className='btn btn-danger'>Delete</button>
                        </td>
                
                    </tr>
                )}

                
            </tbody>
        </table>
    </div>
  )
}

export default UserTable