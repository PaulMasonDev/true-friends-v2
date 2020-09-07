import React from 'react'

import './ItemDisplay.scss';

const ItemDisplay = ({displayItem}) => {
  return (
    <div className="homepage__info__item">
      <h1>{displayItem}</h1>
    </div>
  );
}

export default ItemDisplay;