import React from 'react'
import ListingsCard from '../ListingCard/ListingCard.test';
import PropTypes from 'prop-types';
import './ListingsContainer.css';

const ListingsContainer = (props) => {
  const allListings = props.listingsByArea.map(listing => {

    // return <ListingsCard
    //   listingName= {listing.listingName}
    //   listingAddress1= {listing.listingAddress1}
    //   listingAddress2= {listing.listingAddress2}
    //   key= {listing.listingId}
    // />
  })

  return (
    <section className='listings-container'>
      <section className='Listings-card-container'>
      </section>
    </section>
  )
}

export default ListingsContainer;

ListingsContainer.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  zip: PropTypes.string
};
