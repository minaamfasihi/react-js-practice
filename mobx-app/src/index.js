import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appState from './counterStore.js';

//component
import { observer } from 'mobx-react';

const Counter = observer(({appState}) => {
    return (
        <div>
        Hello Counter
        {appState.getCount}
        <button onClick={appState.incCounter}>Increment</button>

        <button onClick={appState.decCounter}>Decrement</button>
        </div>
    )
});

ReactDOM.render(<Counter appState={appState} />, document.getElementById('root'));
