import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//component
import { observer, Provider, inject } from 'mobx-react';
import Todos from './Todos';
import todoStore from './todoStore';

const App = observer(() => (
    <Provider todoStore={todoStore}>
        <Todos />
    </Provider>
))

// const Counter = inject("appState")(observer(({appState}) => {
//     return (
//         <div>
//         Hello Counter
//         {appState.getCount}
//         <button onClick={appState.incCounter}>Increment</button>

//         <button onClick={appState.decCounter}>Decrement</button>
//         </div>
//     )
// }));

ReactDOM.render(<App />, document.getElementById('root'));
