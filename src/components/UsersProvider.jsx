import React, { useState } from 'react'

export const UsersContext = React.createContext();

export function UsersProvider( {children} ) {
  
  const USERS = [
    {
      id: new Date().getTime() - Math.round(Math.random() * 1000),
      firstname: "Tom",
      lastname: "Morello"
    },
    {
      id: new Date().getTime() - Math.round(Math.random() * 1000),
      firstname: "Thom",
      lastname: "Yorke"
    },
    {
      id: new Date().getTime() - Math.round(Math.random() * 1000),
      firstname: "David",
      lastname: "Gilmour"
    }
  ]

  const [users, setUsers] = useState(USERS);

  return (
    <UsersContext.Provider value = {{users, setUsers}} >
      {children}
    </UsersContext.Provider>
  )
}