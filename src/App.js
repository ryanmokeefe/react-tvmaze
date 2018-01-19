import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Search from './Search.js';
// import Results from './Results.js';
import SearchContainer from './SearchContainer'


class App extends Component {
  render() {
    return (
      <div className="header">
        <h1>React TV Maze</h1>
          <SearchContainer />
        
      </div>
    );
  }
}

export default App;
