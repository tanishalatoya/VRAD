import React from 'react';
import './ListingCard.css';
import PropTypes from 'prop-types';


export const ListingCard = (props) => {
  console.log('made-it')
  return (
    <section className='listings-card'>
      <h2>&ldquo;{props.listingName}&rdquo;</h2>
      <p>Street: {props.listingAddress1}</p>
      <p>Zip Code: {props.listingAddress2}</p>
      <div>
      <button>Favorite</button>
      <button id={props.listingId}>View Listing Details</button>
      </div>
    </section>
  )
}

// export default ListingsCard;

ListingCard.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  zip: PropTypes.string
};
