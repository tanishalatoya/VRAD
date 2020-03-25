import React from 'react';
import { UserLogin } from 'components/Login/login.js';


export const UserInfo = (props) => {
  return (
    <article className ='user-info-article'>
      <h1 className='heading'>Welcome to V-RAD {props.name}</h1>
      <p>User Email: {props.email}</p>
      <p>Reason for travel: {props.reason}</p>
      <button>View Favorites</button>
      <button>Logout</button>
    </article>
  )
}
