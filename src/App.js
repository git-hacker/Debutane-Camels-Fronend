import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RegisterDriver from './components/pages/registerDriver';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterDriver />
      </div>
    );
  }
}

export default App;
