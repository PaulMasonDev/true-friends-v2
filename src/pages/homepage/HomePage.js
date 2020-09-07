import React, { useState } from 'react';

// THIS WILL EVENTUALLY BECOME AN AXIOS CALL WITH USEEFFECT TO A MONGODB DATABASE
import TESTDATA from '../../TESTDATA';

// COMPONENT IMPORTS
import Header from '../../components/Header/Header';
import AddName from '../../components/AddName/AddName';
import ListNames from '../../components/ListNames/ListNames';
import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';
import OccasionDisplay from '../../components/OccasionDisplay/OccasionDisplay';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';

import './Homepage.scss';

const HomePage = () => {

  const [userData, setUserData] = useState(TESTDATA.userData);// FUTURE AXIOS TO B/E
  const [displayData, setDisplayData] = useState(TESTDATA.displayData);
  const [displayOccasion, setDisplayOccasion] = useState('');
  const [displayItem, setDisplayItem] = useState('');

  const [searchName, setSearchName] = useState('');

  // HANDLE SEARCHING LOGIC FOR LISTING NAMES
  const handleName = (val) => {
    setSearchName(val);
    setUserData(TESTDATA.userData)//Not needed. Used to prevent warning
  }
  
  // Functions to handle finding
  const findFriend = (name) => {
    return userData.friends.find(friend => friend.name === name);
  }

  const findOccasion = (name, occasion) => {
    const foundFriend = userData.friends.find(friend => friend.name === name);
    return foundFriend.occasions.find(testOccasion => testOccasion.occasion === occasion);
  }

  const findItem = (name, occasion, item) => {
    const foundFriend = userData.friends.find(friend => friend.name === name);
    const foundOccasion = foundFriend.occasions.find(testOccasion => testOccasion.occasion === occasion);
    return foundOccasion.items.find(testItem => testItem === item);
  }

  
  // HANDLE LOGIC FOR DISPLAYING NAME DETAILS WHEN CLICKING ON SPECIFIC NAME
  const handleNameClick = (name) => {
    const setupDisplayData = findFriend(name);
    setDisplayData(setupDisplayData);
  }

  // HANDLE LOGIC FOR DISPLAYING OCCASION DETAIL WHEN CLICKING ON SPECIFIC OCCASION
  const handleOccasionClick = (name, occasion) => {
    // THEN GO THROUGH THE OCCASIONS OF THE FRIEND TO FIND A MATCH
    const foundOccasion = findOccasion(name, occasion);
    setDisplayOccasion(foundOccasion);
  }

  // HANDLE LOGIC FOR CLICKING ON AN ITEM
  const handleDisplayItem = (name, occasion, item) => {
    // FIRST FIND THE NAME YOU WANT.
    const foundFriend = findFriend(name);
    // THEN GO THROUGH THE OCCASIONS OF THE FRIEND TO FIND A MATCH
    const foundOccasion = foundFriend.occasions.find(testOccasion => testOccasion.occasion === occasion.occasion);
    // THEN GO THROUGH THE ITEMS OF THE FRIEND TO FIND A MATCH
    const foundItem = foundOccasion.items.find(testItem => testItem === item);
    setDisplayItem(foundItem);
  }

  return (
    <div>
      <Header />
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
          <OccasionDisplay 
            displayData={displayData}
            displayOccasion={displayOccasion}
            handleClick={handleDisplayItem}
          />
          <ItemDisplay 
            displayItem={displayItem}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
