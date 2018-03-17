import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Link,
  NavLink,
  Prompt,
  Switch
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

const NotFound = () => {
  return(
    <h1>Not Found</h1>
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

class Form extends Component {
  constructor() {
    super();
    this.state = {
      isChanged: false
    }
  }

  render() {
    return(
      <div>
        <Prompt when={this.state.isChanged} message="Are you sure you wanna leave?" />
        <input onChange={() => {
          this.setState({
            isChanged: true
          })
        }} type="text" />
      </div>
    )
  }
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
        <NavLink className="list-group-item" activeClassName="active" to="/form">Form</NavLink>
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/content" component={Content} />
            <Route path="/form" component={Form} />
            {/*<Route component={NotFound} />*/}
            <Route render={() => <h1>Not found inline</h1>} />
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App;
