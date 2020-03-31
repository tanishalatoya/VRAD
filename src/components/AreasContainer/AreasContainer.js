import React from 'react';
import Areas from '../../components/Areas/Areas.js';
import UserProfile from '../../components/UserProfile/UserProfile.js';
import PropTypes from 'prop-types';
import './AreasContainer.css';

export const AreasContainer = (props) => {
  const allAreas = props.listingsByArea.map(area => {
    return <Areas
      key={area[0].areaDetails.id}
      id={area[0].areaDetails.id}
      areaNickname={area[0].areaNickname}
      name={area[0].areaDetails.name}
      location={area[0].areaDetails.location}
      about={area[0].areaDetails.about}
      selectedAreaId={props.selectedAreaId}
      updateSelectedArea={props.updateSelectedArea}
    />
  })

  return (
    <section className='areas-container'>
      <UserProfile user={props.user}/>
      <section className='card-container'>
      { allAreas }
      </section>
    </section>
  )
}

AreasContainer.propTypes = {
  key: PropTypes.number,
  areaNickname: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  about: PropTypes.string
};
