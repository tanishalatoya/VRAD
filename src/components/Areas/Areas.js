import React from 'react';
import './Areas.css';

const Areas = (props) => {
  return (
    <section>
      <h3>&ldquo;{props.areaNickname}&rdquo;</h3>
      <h4>{props.name}</h4>
      <p>{props.location}</p>
      <p>{props.about}</p>
      <button>View Listings</button>
    </section>
  )
}


export default Areas;
