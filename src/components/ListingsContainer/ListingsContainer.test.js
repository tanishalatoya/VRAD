import React from 'react'
import ListingsCard from '../../components/ListingsCard/ListingsCard.js'
import PropTypes from 'prop-types';
import './ListingsContainer.css';

const ListingsContainer = (props) => {
  const allListings = props.listingsByArea.listings.map(listing => {
    console.log(listing)
    return <ListingsCard
      key={listing[0].listing_id}
      name={listing[0].name}
      address{listing[0].address.street}
      zip{listing[0].address.zip}
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
  name: PropTypes.string,
  address: PropTypes.string,
  zip: PropTypes.string
};
