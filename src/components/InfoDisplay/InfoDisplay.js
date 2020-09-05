import React from 'react'

const InfoDisplay = ({displayData: {name, occasions}}) => {
  
  return (
    <div className="homepage__info__display">
      <h2>{name || "NAME PLACEHOLDER"}</h2>
          {occasions ? occasions.map(occasion => {
            return <p 
              key={occasion.id}
              >
                {occasion.occasion}</p>
          }) : "OCCASIONS PLACEHOLDER"
          }
    </div>
  );
}

export default InfoDisplay;