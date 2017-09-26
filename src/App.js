import React from 'react';
import { Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar from './components/Navbar';
import MovieCollectionView from './views/MovieCollectionView';
import MovieView from './views/MovieView';

const App = () => (
  <div className="container">
    <Navbar />
    <div className="routes" style={{ marginTop: '60px' }}>
      <Route exact path="/" component={MovieCollectionView} />
      <Route path="/movie/:id" component={MovieView} />
    </div>
  </div>
);

export default App;
