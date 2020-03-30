import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile.js';
import './ListingDetails.css';

const ListingDetails = (props) => {
  return (
    <section className='listing-details-container'>
      <UserProfile user={props.user}/>
      <section className='listing-details'>
        <h1>{props.currentListing.listingName}</h1>
      </section>
    </section>
  )
}

export default ListingDetails;
