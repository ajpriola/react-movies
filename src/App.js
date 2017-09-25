import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar from './components/Navbar';
import MovieCollectionView from './components/MovieCollectionView';

const App = () => (
  <div className="container">
    <Navbar />
    <MovieCollectionView />
  </div>
);

export default App;
