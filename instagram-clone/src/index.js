import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import store from "./store";

ReactDOM.render(
    <Router>
        <Provider {...store}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));
