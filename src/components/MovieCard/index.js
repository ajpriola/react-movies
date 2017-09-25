import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './moviecard.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      imageUrl: props.imageUrl
    };
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-header">
          <img className="movie-image" src={this.state.imageUrl} alt="" />
          <div className="movie-overlay">
            <h3 className="movie-title">{this.state.title}</h3>
            <h3 className="movie-date">Date</h3>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default MovieCard;
