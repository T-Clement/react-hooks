import React, { useState } from 'react'

function AddUserForm({users, setUsers}) {
    // STATES
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");



    // COMPORTEMENTS

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            id: new Date().getTime(),
            firstname: firstname,
            lastname: lastname
        }

        const usersCopy = [...users, newUser];

        setUsers(usersCopy);

        // reset values of inputs
        setFirstname("");
        setLastname("");
    }


    // update value of input target by its id
    const handleChange = (event) => {
        if(event.target.id == "firstname") setFirstname(event.target.value);
        if(event.target.id == "lastname") setLastname(event.target.value);
    }



    // AFFICHAGE
  return (
    <>
        <h2 className=''>Add User</h2>
        <form action="" onSubmit={ handleSubmit }>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Firstname :</label>
                <input type="text" className="form-control" id="firstname" onChange = { handleChange } value = { firstname } />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Lastname :</label>
                <input type="text" className="form-control" id="lastname" onChange = { handleChange } value = { lastname } />
            </div>
            <button className='btn btn-primary'>Add User</button>
        </form>
    </>
  )
}

export default AddUserForm