import React from 'react';
import Searchbar from '../Searchbar';
import './navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar">
      <div className="logo-container">
        <h3 className="logo-text">Movies</h3>
      </div>
      <Searchbar />
    </div>
  </div>
);

export default Navbar;
