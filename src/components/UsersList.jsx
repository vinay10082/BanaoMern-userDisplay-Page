import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {

  const [users, setUsers] = useState([]);


   useEffect(() => {
    axios
    .get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
    .then((res) => setUsers(res.data));
  }, [])

  console.log(users)

  return (
    <>
    <h2>List of Users</h2>
        {
          users.data === null ?
          <h1>Loading...</h1> :
          
          users.map((post) =>{
          const {id ,profile} = post;
          return (
            <div className="card my-3" key={id}>
            <p>{profile.firstName}</p>
            </div>
          )}
          )
        }
    </>
  )
}

export default UsersList