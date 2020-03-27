import React from 'react'
import Areas from '../../components/Areas/Areas.js'
import PropTypes from 'prop-types';
import './AreasContainer.css';

const AreasContainer = (props) => {
  const allAreas = props.listingsByArea.map(area => {
    return <Areas
      key={area[0].areaDetails.id}
      areaNickname={area[0].areaNickname}
      name={area[0].areaDetails.name}
      location={area[0].areaDetails.location}
      about={area[0].areaDetails.about}
    />
  })

  return (
    <section>
      { allAreas }
    </section>
  )
}

export default AreasContainer;

AreasContainer.propTypes = {
  key: PropTypes.number,
  areaNickname: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  about: PropTypes.string
};
