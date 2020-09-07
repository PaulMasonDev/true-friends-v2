import React from 'react'

import './Header.scss'

const Header = ({username}) => {
  return (
    <div className="header">
      <h1>TRUE FRIENDS</h1>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Sign-up/Login</li>
      </ul>
    </div>
  );
}

export default Header;