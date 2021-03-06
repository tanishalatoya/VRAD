import React from 'react'
import { ListingCard } from '../ListingCard/ListingCard.js';
import UserProfile from '../../components/UserProfile/UserProfile.js'
import PropTypes from 'prop-types';
import './ListingsContainer.css';

export const ListingsContainer = (props) => {
  const allListings = props.listingsByArea.map(listing => {
    return <ListingCard
      listingName= {listing.listingName}
      listingAddress1= {listing.listingAddress1}
      listingAddress2= {listing.listingAddress2}
      id= {listing.listingId}
      areaId={listing.areaDetails.id}
      key= {listing.listingId}
      favorites={props.favorites}
      setFavorites={props.setFavorites}
      setUpdatedFavorites={props.setUpdatedFavorites}
    />
  })

  return (
    <section className='listings-container'>
      <UserProfile
        user={props.user}
        favorites={props.favorites}/>
      <section className='listing-cards-container'>
        { allListings }
      </section>
    </section>
  )
}

ListingsContainer.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  zip: PropTypes.string
};
