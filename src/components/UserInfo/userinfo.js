import React from 'react';
import { UserLogin } from 'components/Login/login.js';


export const UserInfo = ({ name , email, reason }) => {
  return (
    <article className ='user-info-article'>
      <h1 className='heading'>Welcome to V-RAD {name}</h1>
      <p>User Email: {email}</p>
      <p>Reason for travel: {reason}</p>
      <button>View Favorites</button>
      <button>Logout</button>
    </article>
  )
}
