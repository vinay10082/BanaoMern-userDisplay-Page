import React from 'react'
import UsersList from '../components/UsersList'
import UserInfo from '../components/UserInfo'

const Home = () => {
  return (
    <div className="main-container my-5 mx-5">
        <div className="user-container float-start">
            <>
            < UsersList />
            </>
        </div>
        <div className="userInfo-container float-end">
            <>
            <UserInfo />
            </>
        </div>
    </div>
  )
}

export default Home