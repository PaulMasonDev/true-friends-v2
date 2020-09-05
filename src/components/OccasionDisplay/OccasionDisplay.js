import React from 'react'

import './OccasionDisplay.scss';
const OccasionDisplay = ({displayOccasion}) => {
  return (
    <div className="homepage__info__occasionInfo">
      <p>{displayOccasion.occasion}</p>
      <p>{displayOccasion.date}</p>
        {
          displayOccasion.items ? displayOccasion.items.map(item => {
            return <p>{item}</p>;
          }) : ''
        }
    </div>
  );
}

export default OccasionDisplay;