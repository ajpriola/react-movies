import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard';
import './moviecollectionview.css';

class MovieCollectionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.getTopMovies = this.getTopMovies.bind(this);
  }

  componentWillMount() {
    this.getTopMovies();
  }

  getTopMovies() {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=89b8b7adcb4465f94974e82a5a1f77e3&language=en-US&page=1';
    fetch(url)
      .then(results => results.json())
      .then((data) => {
        this.setState({ movies: data.results });
      });
  }

  render() {
    const cards = [];

    this.state.movies.forEach((movie) => {
      cards.push(<MovieCard key={movie.id} movie={movie} />);
    });
    return <div className="collection-container">{cards}</div>;
  }
}

export default MovieCollectionView;
