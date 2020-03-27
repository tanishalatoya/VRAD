import React from 'react';
import './ListingsCard.css';
import PropTypes from 'prop-types';


const ListingsCard = (props) => {
  return (
    <section className='listings-card'>
      <h2>&ldquo;{props.name}&rdquo;</h2>
      <p>Street: {props.address}</p>
      <p>Zip Code: {props.zip}</p>
      <button id={props.listing_id}>View Listing Details</button>
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
