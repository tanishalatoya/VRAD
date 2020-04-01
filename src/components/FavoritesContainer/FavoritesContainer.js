import React from 'react';
import  Favorites from '../Favorites/Favorites';
import UserProfile from '../../components/UserProfile/UserProfile.js';
import PropTypes from 'prop-types';
import './FavoritesContainer.css';

export const FavoritesContainer = (props) => {


  return (
    <section className='favorites-container'>
      <UserProfile
        user={props.user}
        favorites={props.favorites}/>
      <section className='favorite-cards-container'>
        <p>Favorites here.</p>
      </section>
    </section>
  )
}
