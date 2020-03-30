import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile.js';

const ListingDetails = (props) => {
  return (
    <section className='listing-details-container'>
      <UserProfile user={props.user}/>
      <h1>{props.currentListing.listingName}</h1>
    </section>
  )
}

export default ListingDetails;
