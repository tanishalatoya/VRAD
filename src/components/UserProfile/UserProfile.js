import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='/favorites'>
        <button># of Favorites</button>
      </Link>
      <Link to='/'>
        <button>Logout</button>
      </Link>
    </aside>
  )
}


export default UserProfile;
