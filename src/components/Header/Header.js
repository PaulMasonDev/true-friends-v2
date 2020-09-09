import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = ({username}) => {
  return (
      <div className="header">
        <h1>
          <Link to="/">TRUE FRIENDS</Link>
        </h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signuplogin">Sign-Up/Login</Link>
          </li>
        </ul>
      </div>
  );
}

export default Header;