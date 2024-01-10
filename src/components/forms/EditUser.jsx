import React, { useEffect, useState } from 'react'

function EditUser({users, setUsers, setIsFormEditActive, userToEdit, setUserToEdit}) {

    // STATES WHO COMES FROM CLICK
    const [firstname, setFirstname] = useState(userToEdit.firstname);
    const [lastname, setLastname] = useState(userToEdit.lastname);
    

    // 
    useEffect(() => {
        setFirstname(userToEdit.firstname);
        setLastname(userToEdit.lastname);
    }, [userToEdit]);


     // update value of input target by its id
     const handleChange = (event) => {
        if(event.target.id == "firstname") setFirstname(event.target.value);
        if(event.target.id == "lastname") setLastname(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User edition saved");


        // find the index in the users array corresponding to the id of the userToEdit id
        let indexUserToEdit = users.findIndex((user) => user.id == userToEdit.id);

        // copy of users
        const usersCopy = [...users];

        // update userToEdit values
        usersCopy[indexUserToEdit] = {
            id: userToEdit.id,
            firstname: firstname,
            lastname: lastname
        };

        // console.log(usersCopy);
        
        setUsers(usersCopy);
        setFirstname("");
        setLastname("");
        setIsFormEditActive(false);
        setUserToEdit(null);
    }

  return (
    <div>
        <h2 className=''>Edit User</h2>
        <form action="submit" onSubmit={ handleSubmit }>
            
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Firstname :</label>
                <input type="text" className="form-control" id="firstname" onChange = { handleChange } value = { firstname } />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Lastname :</label>
                <input type="text" className="form-control" id="lastname" onChange = { handleChange } value = { lastname } />
            </div>
            <button id="" className='btn btn-warning'>Edit User</button>
        </form>
    </div>
  )
}

export default EditUser