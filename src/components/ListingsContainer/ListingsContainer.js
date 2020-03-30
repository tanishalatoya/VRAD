import React from 'react'
import { ListingCard } from '../ListingCard/ListingCard.js';
import PropTypes from 'prop-types';
import './ListingsContainer.css';

export const ListingsContainer = (props) => {
  const combinedListings = [
    ...props.listingsByArea[0],
    ...props.listingsByArea[1],
    ...props.listingsByArea[2],
    ...props.listingsByArea[3],
  ]

  const selectedAreaListings = combinedListings.filter(listing => {
    return listing.areaDetails.id === parseInt(props.selectedAreaId)
  })

  const allListings = selectedAreaListings.map(listing => {
    return <ListingCard
      listingName= {listing.listingName}
      listingAddress1= {listing.listingAddress1}
      listingAddress2= {listing.listingAddress2}
      key= {listing.listingId}
    />
  })

  return (
    <section>
      { allListings }
    </section>
  )
}


ListingsContainer.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  zip: PropTypes.string
};
