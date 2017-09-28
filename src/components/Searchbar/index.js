import React, { Component } from 'react';
import SearchResult from './SearchResult';
import './searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', movies: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // const key = '89b8b7adcb4465f94974e82a5a1f77e3';
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}?query=${event.target
    // .value}`;
    const query = event.target.value;
    this.setState({ query });
    if (query === '') {
      this.setState({ movies: [] });
    } else {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=89b8b7adcb4465f94974e82a5a1f77e3&query=${query}`;
      fetch(url)
        .then(results => results.json())
        .then(data => this.setState({ movies: data.results }));
    }
  }

  render() {
    const cards = [];

    this.state.movies.slice(0, 6).forEach((movie) => {
      cards.push(<SearchResult key={movie.id} movie={movie} />);
    });

    return (
      <div className="search">
        <div className="searchbar-container">
          <div className="icon-container">
            <i className="icon fa fa-search" aria-hidden="true" />
          </div>
          <input
            className="searchbar"
            type="text"
            placeholder="Search"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="results-container">{cards}</div>
      </div>
    );
  }
}

export default Searchbar;
