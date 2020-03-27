import React from 'react'
import ListingsCard from '../../components/ListingsCard/ListingsCard.js'
import PropTypes from 'prop-types';
import './ListingsContainer.css';

const ListingsContainer = (props) => {
  const allListings = props.listingsByArea.listingDetails.map(listing => {
    console.log(listings)
    return <ListingsCard
      key={listing[0].listingDetails.neighborhood_id}
      name={listing[0].listingName}
    />
  })

  return (
    <section className='listings-container'>
      <section className='Listings-card-container'>
      { allListings }
      </section>
    </section>
  )
}

export default ListingsContainer;

ListingsContainer.propTypes = {
  key: PropTypes.number,
  name: PropTypes.listingName,
};
