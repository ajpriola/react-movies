import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './companyitem.css';

class CompanyItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: props.company
    };
  }

  componentWillMount() {
    // fetch
    const companyId = this.state.company.id;
    const url = `https://api.themoviedb.org/3/company/${companyId}?api_key=89b8b7adcb4465f94974e82a5a1f77e3`;
    fetch(url)
      .then(results => results.json())
      .then((data) => {
        this.setState({ company: data });
      });
  }

  render() {
    // const imageUrl = `https://image.tmdb.org/t/p/w92${this.state.company.logo_path}`;
    return (
      <div className="company-container">
        <div className="name-container">
          <h1 className="company-name">{this.state.company.name}</h1>
        </div>
      </div>
    );
  }
}

CompanyItem.propTypes = {
  company: PropTypes.shape({}).isRequired
};

export default CompanyItem;
