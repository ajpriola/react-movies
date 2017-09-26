import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './movieview.css';

class MovieView extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=89b8b7adcb4465f94974e82a5a1f77e3&language=en-US`;

    fetch(url)
      .then(results => results.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return <p>{this.props.match.params.id}</p>;
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
