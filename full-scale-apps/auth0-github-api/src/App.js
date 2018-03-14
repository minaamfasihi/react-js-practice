import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: 'Q9pu8ZKG3148EizjCP0kcNSHJOUf03cJ',
    domain: 'github-viewer.auth0.com'
  };

  componentWillMount() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Github />
      </div>
    );
  }
}

export default App;
