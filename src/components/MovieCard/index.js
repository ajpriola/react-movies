import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './moviecard.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie
    };
  }

  render() {
    const movie = this.state.movie;
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const year = new Date(movie.release_date).getFullYear();
    console.log(movie);
    return (
      <div className="card-container">
        <div className="card-header">
          <img className="movie-image" src={posterUrl} alt="" />
          <div className="movie-info">
            <h3 className="movie-title">{movie.title}</h3>
            <h3 className="movie-date">{year}</h3>
            <p className="movie-overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

export default MovieCard;
