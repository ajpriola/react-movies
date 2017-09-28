import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar from './components/Navbar';
import MovieCollectionView from './views/MovieCollectionView';
import MovieView from './views/MovieView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.searchCallback = this.searchCallback.bind(this);
  }

  searchCallback(query) {
    this.setState({ query });
  }

  render() {
    /*
    const CollectionRoute = () => (
      <Route
        exact
        path="/"
        query={this.state.query}
        render={() => <MovieCollectionView displayQuery={this.state.query} />}
      />
    ); */

    return (
      <div className="container">
        <Navbar searchCallback={this.searchCallback} />
        <div className="routes" style={{ marginTop: '60px' }}>
          <Route exact path="/" component={MovieCollectionView} />
          <Route path="/movie/:id" component={MovieView} />
        </div>
      </div>
    );
  }
}
export default App;
