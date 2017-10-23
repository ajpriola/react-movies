import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchResult from './SearchResult';
import './searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', movies: [] };

    this.movieWasSelected = this.movieWasSelected.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    // const key = '89b8b7adcb4465f94974e82a5a1f77e3';
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}?query=${event.target
    // .value}`;
    const query = event.target.value;
    this.setState({ query });
    if (query === '') {
      this.setState({ movies: [], showResults: false });
    } else {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=89b8b7adcb4465f94974e82a5a1f77e3&query=${query}`;
      fetch(url)
        .then(results => results.json())
        .then(data => this.setState({ movies: data.results, showResults: true }));
    }
  }

  handleClick() {
    this.setState({ showResults: true });
  }

  handleBlur() {
    this.setState({ showResults: true });
  }

  movieWasSelected(event) {
    console.log(event);
    this.setState({ showResults: false });
  }

  render() {
    const cards = [];
    if (this.state.showResults) {
      this.state.movies.slice(0, 6).forEach((movie) => {
        const path = `/movie/${movie.id}`;
        // console.log(path);
        cards.push(
          <Link to={path} key={movie.id} onClick={this.movieWasSelected}>
            <SearchResult movie={movie} />
          </Link>
        );
      });
    }

    return (
      <div className="search" onBlur={this.handleBlur}>
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
            onClick={this.handleClick}
          />
        </div>
        <div className="results-container">{cards}</div>
      </div>
    );
  }
}

export default Searchbar;
