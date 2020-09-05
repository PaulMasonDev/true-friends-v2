import React, { useState } from 'react';
import './Homepage.scss';

//THIS WILL EVENTUALLY BECOME AN AXIOS CALL TO A MONGODB DATABASE
import TESTDATA from '../../TESTDATA';

import AddName from '../../components/AddName/AddName';
import ListNames from '../../components/ListNames/ListNames';
import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';

const HomePage = () => {

  const [userData, setUserData] = useState(TESTDATA.userData);
  const [displayData, setDisplayData] = useState(TESTDATA.displayData);
  const [searchName, setSearchName] = useState('');

  const handleName = (val) => {
    setSearchName(val);
  }

  const handleNameClick = async (name) => {
    const setupDisplayData = userData.friends.filter(friend => {
      if(friend.name === name) {
        return friend;
      }
    });
    // console.log(setupDisplayData[0].occasions[0].items[0]);
    await setDisplayData(setupDisplayData[0] || "Name Goes Here");
  }

  return (
    <div className="homepage">
      <div className="homepage__names">
        <AddName 
          handleName={handleName} 
          searchName={searchName}
        />
        <ListNames 
          handleClick={handleNameClick} 
          userData={userData} 
          searchName={searchName}
        />
      </div>
      <div className="homepage__info">
        <InfoDisplay 
          displayData={displayData}  
        />
        <div className="homepage__info__addOccasion">

        </div>
        <div className="homepage__info__addDate">

        </div>
        <div className="homepage__info__addButton">

        </div>
        <div className="homepage__info__occasionInfo">

        </div>
        <div className="homepage__info__occasion">
          <div className="homepage__info__occasion__item">

          </div>
          <div className="homepage__info__occasion__addButton">

          </div>
          <div className="homepage__info__occasion__itemList">

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
