import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile.js';
import './ListingDetails.css';

export const ListingDetails = (props) => {
  let propKey = 0;
  const featureList = props.currentListing.listingDetails.features.map(feat => {
    return (
      <li key={propKey += 1}>{feat}</li>
    )
  })

  return (
    <section className='listing-details-container'>
      <UserProfile
        user={props.user}
        favorites={props.favorites} />
      <section className='listing-details'>
        <h1>{props.currentListing.listingName}</h1>
        <p>Number of Beds: {props.currentListing.listingDetails.beds}</p>
        <p>Number of Bathrooms: {props.currentListing.listingDetails.baths}</p>
        <p>Cost Per Night: ${props.currentListing.listingDetails.cost_per_night}.00</p>
        <h2>Features</h2>
        <ul>
          {featureList}
        </ul>
        <button>Favorite Listing</button>
      </section>
    </section>
  )
}
