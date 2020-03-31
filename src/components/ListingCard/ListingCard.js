import React from 'react';
import './ListingCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ListingCard = (props) => {
  return (
    <section className='listings-card'>
      <h2>&ldquo;{props.listingName}&rdquo;</h2>
      <p>Street: {props.listingAddress1}</p>
      <p>Zip Code: {props.listingAddress2}</p>
      <div>
      <button>Favorite</button>
      <Link to={`/areas/${props.areaId}/listing/${props.id}/details`}>
      <button id={props.id}>View Listing Details</button>
      </Link>
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
