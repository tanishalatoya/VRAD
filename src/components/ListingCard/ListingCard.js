import React from 'react';
import './ListingsCard.css';
import PropTypes from 'prop-types';


const ListingsCard = (props) => {
  return (
    <section className='listings-card'>
      <h2>&ldquo;{props.listingName}&rdquo;</h2>
      <p>Street: {props.listingAddress1}</p>
      <p>Zip Code: {props.listingAddress2}</p>
      <div>
      <button>Favorotive</button>
      <button id={props.listingId}>View Listing Details</button>
      </div>
    </section>
  )
}

export default ListingsCard;

ListingsCard.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  zip: PropTypes.string
};
