import React from 'react';
import ReactDOM from 'react-dom';

// class TodoItem extends React.Component {
//     render() {
//         return (
//             <li onClick={() => {
//                 props.clickHandler(props.index);
//             }} className={props.details.completed ? 'completed' : ''}>
//                 {props.details.name}
//             </li>
//         )
//     }
// }

// Making this a stateless functional component
const TodoItem = (props) => {
    return (
        <li onClick={() => {
            props.clickHandler(props.index);
        }} className={props.details.completed ? 'completed' : ''}>
            {props.details.name}
        </li>
    )
};

export default TodoItem;