import React, { Component } from 'react';
import MovieCard from '../MovieCard';
import './moviecollectionview.css';

class MovieCollectionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <div className="collection-container">
        <MovieCard
          title="La La Land"
          imageUrl="https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg"
        />
      </div>
    );
  }
}

export default MovieCollectionView;
