import React from 'react';
import './ListingsCard.css'

const ListingsCard = (props) => {
  return (
    <section className='listings-card'>
      <h3>&ldquo;{props.name}&rdquo;</h3>
      <button id={props.neighborhood_id}>View Details</button>
    </section>
  )
}

export default ListingsCard;

ListingsCard.propTypes = {
  key: PropTypes.number,
  name: PropTypes.name
};
