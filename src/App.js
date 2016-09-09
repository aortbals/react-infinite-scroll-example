import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Infinite Scroll</h2>
        </div>

        <List />
      </div>
    );
  }
}

export default App;
