import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem';

class TodoList extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {
            tasks: [
                {
                    name: 'Buy Cheese',
                    completed: false
                },
                {
                    name: 'Buy Ketchup',
                    completed: false
                },
                {
                    name: 'Buy TV',
                    completed: false
                }
            ]
        }
    }

    changeStatus(index) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({tasks: tasks});
    }

    render() {
        return (
            <ul>
                {
                    this.state.tasks.map((task, index) => {
                        return <TodoItem key={task.name} clickHandler={this.changeStatus} 
                        index={index} details={task} />
                    })
                }
            </ul>
        )
    }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));