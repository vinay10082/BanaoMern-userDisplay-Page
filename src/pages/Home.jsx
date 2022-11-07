import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { render } from '@testing-library/react';

const Home = () => {

  const [users, setUsers] = useState([]);
  var [userId, setUserId] = useState();
  const url = 'https://602e7c2c4410730017c50b9d.mockapi.io/users'

  useEffect(() => {
    axios
    .get(url)
    .then((res) => setUsers(res.data));
  }, [])

  console.log(userId)
    const userInfo = users[userId];
    console.log(userInfo)

  return (
    <div className="main-container my-5 mx-5">
        <div className="user-container float-start">
        <>
    <h2>List of Users</h2>
        {
          
          users.map((post) =>{
            const {id ,profile} = post;
            return (
            <div className="card my-1" key={id}>
              <p>({id}). {profile.firstName} <i class="btn btn-link text-decoration-none" onClick={() => setUserId(id-1)}>Show Info</i></p>
            </div>
          )}
          )
        }
    </>
        </div>
        <div className="userInfo-container float-end">
            <h2>Selected User Info</h2>
            <>
            {
            userInfo == null ?
            <h1>Loading...</h1>
            :

             () => { render(
              <>
              <div className="card">
              <img src={userInfo.avatar} alt="..." />
              <h3>@ {userInfo.profile.username}</h3>
              <p>{userInfo.Bio}</p>
              Fullname:
              <p>{userInfo.profile.firstName} {userInfo.profile.lastName}</p>
              Job Title:
              <p>{userInfo.jobTitle}</p>
              email:
              <p>{userInfo.profile.email}</p>
            </div>
            </>
                        )}
            }
            </>

        </div>
    </div>
  )
}

export default Home