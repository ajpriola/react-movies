import React from 'react';

import './searchbar.css';

const Searchbar = () => (
  <div className="searchbar-container">
    <div className="icon-container">
      <i className="icon fa fa-search" aria-hidden="true" />
    </div>
    <input className="searchbar" type="text" placeholder="Search" />
  </div>
);

export default Searchbar;
