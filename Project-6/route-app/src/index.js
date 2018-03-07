import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import One from './One';
import Two from './Two';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/One" component={One}></Route>
      <Route path="/Two" component={Two}></Route>
    </Router>
    ,
    document.getElementById('root')
  );
