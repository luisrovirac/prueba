import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './Menu';


class App extends Component {
  constructor() {
    super();
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Menu />
          </div>  
        </header>
      </div>
    );
  }
}

export default App;
