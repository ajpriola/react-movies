import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './moviecard.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
      redirectUrl: ''
    };
    this.selectMovie = this.selectMovie.bind(this);
  }

  selectMovie() {
    this.setState({
      redirectUrl: `/movie/${this.state.movie.id}`
    });
  }

  render() {
    const movie = this.state.movie;
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const year = new Date(movie.release_date).getFullYear();

    return (
      <div onClick={this.selectMovie} role="link" className="card-container" tabIndex="-1">
        {this.state.redirectUrl && <Redirect to={this.state.redirectUrl} />}
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
