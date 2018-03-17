import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Link,
  NavLink
} from 'react-router-dom';

const Home = () => {
  return(
    <h1>Home</h1>
  )
}

const About = () => {
  return(
    <h1>About</h1>
  )
}

const Content = () => {
  return(
    <div>
      <NavLink className="list-group-item" exact activeClassName="active" to="/content/city">City</NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/content/sports">Sports</NavLink>
      <Route path="/content/:contentName" component={ContentDetails} />
    </div>
  )
}

const ContentDetails = (props) => {
  return(
    <div>{props.match.params.contentName ? 
      <div>
        <img src={'http://lorempixel.com/400/200/' + props.match.params.contentName + '/1'} />
      </div>
        :
        null
      }
    </div>
  )
}

const Links = () => {
  return(
    <div className="list-group">
        <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/content">Content</NavLink>
    </div>
  )
}

const App = () => {
  return(
    <Router>
      <div className="row">
        <section className="col-sm-4">
          <Links />
        </section>

        <section className="col-sm-8">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/content" component={Content} />
        </section>
      </div>
    </Router>
  )
}

export default App;
