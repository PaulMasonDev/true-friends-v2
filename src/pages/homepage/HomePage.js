import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__names">
        <div className="homepage__names__add">
          <div className="homepage__names__add__search"></div>
          <div className="homepage__names__add__button"></div>
        </div>
        <div className="homepage__names__list"></div>
      </div>
      <div className="homepage__info">
        <div className="homepage__info__display">
          <div className="homepage__info__display__addOccasion"></div>
          <div className="homepage__info__display__addDate"></div>
          <div className="homepage__info__display__addButton"></div>
          <div className="homepage__info__display__occasionInfo"></div>
        </div>
        <div className="homepage__info__occasion">
          <div className="homepage__info__occasion__item"></div>
          <div className="homepage__info__occasion__addButton"></div>
          <div className="homepage__info__occasion__itemList"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
