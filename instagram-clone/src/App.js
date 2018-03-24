import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from "mobx-react";
import { Switch, Route, withRouter, NavLink } from "react-router-dom";

import MobxgramList from "./components/MobxgramList";
import PhotoDetails from "./components/PhotoDetail";
import AddPhoto from "./components/AddPhoto";

class App extends Component {
  componentDidMount() {
    this.props.mobxgramStore.getStore();
  }

  render() {
    const { mobxgramStore } = this.props;

    return (
      <div>
        <h2 className="text-center">
          <NavLink to="/">
            Mobxgram
          </NavLink>
        </h2>
        
      {
        mobxgramStore.mobxgramList.length ?
        <Switch>
          <Route path="/add_photo" component={AddPhoto} />
          <Route exact path="/" component={MobxgramList} />
          <Route path="/:imageName" component={PhotoDetails} />
        </Switch> : null
      }
      </div>
    );
  }
}

export default inject("mobxgramStore")(withRouter(observer(App)));
