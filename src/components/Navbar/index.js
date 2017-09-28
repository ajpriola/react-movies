import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar';
import './navbar.css';

const Navbar = props => (
  <div className="navbar-container">
    <div className="navbar">
      <Link className="logo-container" to="/">
        <h3 className="logo-text">Popular</h3>
      </Link>
      <Searchbar callback={props.searchCallback} />
    </div>
  </div>
);

Navbar.propTypes = {
  searchCallback: PropTypes.func.isRequired
};

export default Navbar;
