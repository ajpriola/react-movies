import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './searchresult.css';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie
    };
  }

  render() {
    const movie = this.state.movie;
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
      <div className="result-container">
        <div className="image-container">
          <img className="result-image" src={posterUrl} alt="" />
        </div>
        <div className="result-content">
          <h3 className="result-title">{movie.title}</h3>
          <h4 className="result-subtitle">2014</h4>
        </div>
      </div>
    );
  }
}

/*
const SearchResult = props => (
  <div className="result-container">
    <div className="image-container">
      <img
        className="result-image"
        src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg"
        alt=""
      />
    </div>
    <div className="result-content">
      <h3 className="result-title">{props.title}</h3>
      <h4 className="result-subtitle">2014</h4>
    </div>
  </div>
);
*/

SearchResult.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

export default SearchResult;
