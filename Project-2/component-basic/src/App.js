import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.yourname = "sammy";
    this.state = {};
  }

  sayHello(name) {
    return "Hello, " + name;
  }

  render() {
    return (
      <div className="App">
        <h2>Just some sample data: {this.sayHello("Minaam")}</h2>
      </div>
    );
  }
}

export default App;
