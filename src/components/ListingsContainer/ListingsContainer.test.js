import React from 'react'
import Areas from '../../components/ListingsCard/ListingsCard.js'
import PropTypes from 'prop-types';
import './ListingsContainer.css';

const ListingsContainer = (props) => {
  const allListings = props.listingsByArea.listingDetails.map(listing => {
    console.log(listings)
    return <ListingsCard
      key={listing[0].listingDetails.neighborhood_id}
      name={listing[0].listingName}
      areaNickname={listing[0].areaNickname}
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

};
