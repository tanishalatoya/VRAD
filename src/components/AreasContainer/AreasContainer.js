import React from 'react';
import './AreasContainer.css';

const AreasContainer = ({ areas }) => {
  const allAreas = props.map(area => {
    return <Area
      name={area.area}
      location={area.location}
      about={area.about}
      listings-{area.listings}
      key={area.id}
    />
  })

  return (
    <section>
      { allAreas }
    </section>
  )
}

export default AreasContainer;
