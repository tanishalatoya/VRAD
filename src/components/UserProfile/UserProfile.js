import React from 'react';
import userIcon from '../../assets/user.svg'
import './UserProfile.css';

const UserProfile = (props) => {
  return (
    <aside className='user-profile'>
      <img src={userIcon} alt='user icon' />
      <h3>{props.user.name}</h3>
      <p>{props.user.email}</p>
      <p>Travel Purpose</p>
      <p>{props.user.reason}</p>
    </aside>
  )
}


export default UserProfile;
