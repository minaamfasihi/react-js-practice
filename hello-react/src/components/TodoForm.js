import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addTask}>
            <input type="text"
                value={props.currentTask}
                onChange={props.updateTask}
            />
            <button type="submit">Submit</button>
        </form>
    )
};

TodoForm.propTypes = {
    currentTask: PropTypes.string.isRequired,
    updateTask: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired
}

export default TodoForm;