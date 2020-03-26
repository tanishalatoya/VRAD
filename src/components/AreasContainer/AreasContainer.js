import React from 'react';
import './AreasContainer.css';

const AreasContainer = (props) => {
  const allAreas = props.listingsByArea.map(area => {
    // console.log(area[0].areaNickname);
    // console.log(area[0].areaDetails.name);
    // console.log(area[0].areaDetails.location);
    // console.log(area[0].areaDetails.about);
    // console.log(area[0].areaDetails.id);
    return <Area
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
