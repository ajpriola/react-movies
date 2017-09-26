import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompanyItem from '../../components/CompanyItem';
import './movieview.css';

class MovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      redirectUrl: ''
    };

    this.getMovie = this.getMovie.bind(this);
  }

  componentWillMount() {
    this.getMovie();
  }

  getMovie() {
    const id = this.props.match.params.id;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=89b8b7adcb4465f94974e82a5a1f77e3&language=en-US`;
    fetch(url)
      .then(results => results.json())
      .then((data) => {
        this.setState({ movie: data });
      });
  }

  render() {
    const movie = this.state.movie;
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const year = new Date(movie.release_date).getFullYear();
    let genres = [];
    if (movie.genres !== undefined) {
      genres = movie.genres.map(genre => (
        <h3 className="genre-label" key={genre.id}>
          {genre.name}
        </h3>
      ));
    }

    let companies = [];
    if (movie.production_companies !== undefined) {
      companies = movie.production_companies.map(company => (
        <CompanyItem company={company} key={company.id} />
      ));
    }

    return (
      <div className="movie-container">
        <div className="movie-section">
          <div className="header-wrapper">
            <img className="movie-image" src={posterUrl} alt="" />
            <div className="title-date-container">
              <h3 className="movie-title">{movie.title}</h3>
              <h3 className="movie-date">{year}</h3>
              <div className="list-container">{genres}</div>
            </div>
          </div>
          <div className="list-container">{companies}</div>
        </div>
        <div className="movie-section">
          <h4 className="section-title">Overview</h4>
          <p className="section-content">{movie.overview}</p>
        </div>
      </div>
    );
  }
}

MovieView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

MovieView.defaultProps = {
  match: {
    params: {
      id: ''
    }
  }
};

export default MovieView;
