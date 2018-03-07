import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber() {
    // console.log("random number called");
    this.setState({r: Math.random() * 10 });
  }

  render() {
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <br />
        <Numbers myNumber={this.state.r} />
      </div>
    )
  }
}

class Numbers extends Component {
  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentWillMount() {
    console.log("componentWillMount called");
  }

  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps called");
  }

  shouldComponentUpdate(newProps, nextState) {
    console.log("shouldComponentUpdate called");
  }

  componentWillUpdate(newProps, nextState) {
    console.log("componentWillUpdate called");
  }

  componentDidUpdate(newProps, nextState) {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    )
  }
}

export default App;
