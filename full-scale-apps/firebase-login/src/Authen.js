import React, { Component } from 'react';
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCxQjNJQw5ooh0SIrYeFMTbtA2-kP7q2ps",
    authDomain: "usurvey-e6509.firebaseapp.com",
    databaseURL: "https://usurvey-e6509.firebaseio.com",
    projectId: "usurvey-e6509",
    storageBucket: "usurvey-e6509.appspot.com",
    messagingSenderId: "784105271955"
  };
  firebase.initializeApp(config);

class Authen extends Component {
  login(event) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.then(user => {
      var lout = document.getElementById('logout');
      lout.classList.remove('hide');
    });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  signup(event) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
    .then(user => {
      var err = "Welcome" + user.email;
      firebase.database().ref('user/' + user.uid).set({
        email: user.email
      });
      console.log(user);
      this.setState({err: err});

      promise
      .catch(e => {
        var err = e.message;
        console.log(err);
        this.setState({err: err});
      });
    });
  }

  google() {
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise.then(result => {
      var user = result.user;
      firebase.database().ref('users/' + user.uid).set({
        email: user.email,
        name: user.displayName
      });
    });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  logout() {
    firebase.auth().signOut();
    var lout = document.getElementById('logout');
    lout.classList.add('hide');
  }

  constructor(props) {
    super(props);

    this.state = {
      err: ''
    };

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }

  render() {
    return(
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input id="password" ref="password" type="password" placeholder="Enter your password" /><br />
        <p>{this.state.err}</p>

        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button onClick={this.logout} id="logout" className="hide">Log Out</button>
        <button onClick={this.google} id="google" className="google">Sign in with google</button>
      </div>
    )
  }
}

export default Authen;
