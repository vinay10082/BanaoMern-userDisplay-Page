import React from 'react'

const userInfo = ({avatar, profile, Bio, jobTitle}) => {
  return (
    <div className="card">
    <img src={avatar} alt="..." />
    <h3>@ {profile.username}</h3>
    <p>{Bio}</p>
    Fullname:
    <p>{profile.firstName} {userInfo.profile.lastName}</p>
    Job Title:
    <p>{jobTitle}</p>
    email:
    <p>{profile.email}</p>
  </div>
  )
}

export default userInfo