import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'

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
    <h2 class="container p-3 my-3 bg-primary text-white rounded-right">List of Users</h2>
        {
          
          users.map((post) =>{
            const {id ,profile} = post;
            return (
            <div className="card my-5" key={id}>
              <p>({id}). {profile.firstName} <i class="btn btn-link text-decoration-none" onClick={() => setUserId(id-1)}>Show Info</i></p>
            </div>
          )}
          )
        }
    </>
        </div>
        <div className="userInfo-container float-end">
            <h2 class="container p-3 my-3 bg-dark text-white rounded-left">Selected User Info</h2>
            <>
            {
            userInfo == null ?
            <h1>No data to show...</h1>
            :
              <>
            <div class="container d-flex justify-content-center mt-5">
                 <div class="card p-5 py-5">
                     <div class="text-center">
                     <i class="fa fa-user-circle fa-5x" aria-hidden="true"></i>
                         <p class="mt-1">@ {userInfo.profile.username}</p>
                         <h3 class="mt-2">{userInfo.profile.firstName} {userInfo.profile.lastName}</h3>
                         <span class="mt-1 clearfix">{userInfo.jobTitle}</span>
                         <b>ABOUT</b><br></br>
                         <small class="mt-4">{userInfo.Bio}</small>
                         
                         <div class="social-buttons mt-5"> 
                             <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> 
                             <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> 
                             <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> 
                             <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button> 
                             <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button> 
                         </div>
                         
                         <p class="mt-3"><b>Email</b><br></br>{userInfo.profile.email}</p>
                     
                     </div>
                     
                 
                 </div>
    
             </div>
            </>
            }
            </>

        </div>
    </div>
  )
}

export default Home