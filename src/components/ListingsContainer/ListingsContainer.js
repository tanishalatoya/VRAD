import React from 'react'
import { ListingCard } from '../ListingCard/ListingCard.js';
import PropTypes from 'prop-types';
import './ListingsContainer.css';

export const ListingsContainer = (props) => {
console.log(props.listingsByArea)
let area = props.listingsByArea[0];

const allListings = area.map(listing => {
    return <ListingCard
      listingName= {listing.listingName}
      listingAddress1= {listing.listingAddress1}
      listingAddress2= {listing.listingAddress2}
      key= {listing.listingId}
    />
  })

  return (
    <section>
      {allListings}
    </section>
  )
}

// export default ListingsContainer;

ListingsContainer.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  zip: PropTypes.string
};
