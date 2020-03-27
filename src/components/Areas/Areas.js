import React from 'react';
import PropTypes from 'prop-types';
import './Areas.css';

const Areas = (props) => {
  return (
    <section className='area-card'>
      <h3>&ldquo;{props.areaNickname}&rdquo;</h3>
      <h4>{props.name}</h4>
      <p>{props.location}</p>
      <p>{props.about}</p>
      <button>View Listings</button>
    </section>
  )
}

export default Areas;

Areas.propTypes = {
  key: PropTypes.number,
  areaNickname: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  about: PropTypes.string
};
