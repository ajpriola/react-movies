import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar';
import './navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar">
      <Link className="logo-container" to="/">
        <h3 className="logo-text">Movies</h3>
      </Link>
      <Searchbar />
    </div>
  </div>
);

export default Navbar;
