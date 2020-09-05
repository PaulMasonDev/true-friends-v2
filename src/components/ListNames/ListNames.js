import React from 'react'

const ListNames = (props) => {
  const filteredFriends = props.userData.friends.filter(friend => 
    friend.name.toLowerCase().includes(props.searchName.toLowerCase())
    );
  
  const handleClick = (e) => {
    const name = e.target.getAttribute('data-name');
    props.handleClick(name);
  } 

  return (
    <div className="homepage__names__list">
      {filteredFriends.map(friend => {
      return (
      <p 
        key={friend.id}
        data-name={friend.name} 
        onClick={handleClick}
        >
        {friend.name}
      </p>
      );
    })}
    </div>
  );
}

export default ListNames;