import React, { useState } from 'react';
import './Homepage.scss';

//THIS WILL EVENTUALLY BECOME AN AXIOS CALL TO A MONGODB DATABASE
import TESTDATA from '../../TESTDATA';

import AddName from '../../components/AddName/AddName';
import ListNames from '../../components/ListNames/ListNames';
import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';
import OccasionDisplay from '../../components/OccasionDisplay/OccasionDisplay';

const HomePage = () => {

  const [userData, setUserData] = useState(TESTDATA.userData);
  const [displayData, setDisplayData] = useState(TESTDATA.displayData);
  const [displayOccasion, setDisplayOccasion] = useState('OCCASIONS INFO TITLE');
  const [searchName, setSearchName] = useState('');

  const handleName = (val) => {
    setSearchName(val);
  }

  const handleNameClick = (name) => {
    const setupDisplayData = userData.friends.filter(friend => {
      if(friend.name === name) {
        return friend;
      }
    });
    // console.log(setupDisplayData[0].occasions[0].items[0]);
    setDisplayData(setupDisplayData[0] || "Name Goes Here");
  }

  const handleOccasionClick = (name, occasion) => {
    console.log(`NAME ${name}, OCCASION ${occasion}`);

    const foundFriend = userData.friends.filter(friend => {
      if(friend.name === name){
        return friend
      }
    });
    
    const foundOccasion = foundFriend[0].occasions.filter(testOccasion => {
      if(testOccasion.occasion === occasion){
        return occasion;
      }
    });
    console.log(foundOccasion[0])
    setDisplayOccasion(foundOccasion[0]);
    
    
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
          handleClick={handleOccasionClick}  
        />
        <div className="homepage__info__occasionInfo">
        <OccasionDisplay 
          displayOccasion={displayOccasion}
        />
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
