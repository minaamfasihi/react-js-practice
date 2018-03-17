import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

class TodoList extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);

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
            ],
            currentTask: ''
        }
    }

    changeStatus(index) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({tasks: tasks});
    }

    updateTask(newValue) {
        this.setState({currentTask: newValue.target.value});
    }

    addTask(evt) {
        evt.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name: currentTask,
            completed: false
        });
        this.setState({
            tasks,
            currentTask: ''
        });
    }

    deleteTask(index) {
        console.log(index);
        let tasks = this.state.tasks;
        tasks.splice(index, 1);
        this.setState({
            tasks
        });
    }

    editTask(index, newValue) {
        console.log(index, newValue);
        var tasks = this.state.tasks;
        var task = tasks[index];
        task['name'] = newValue;
        this.setState({
            tasks
        });
    }

    render() {
        return (
            <section>
                <TodoForm
                    currentTask={this.state.currentTask}
                    updateTask={this.updateTask}
                    addTask={this.addTask}
                />
                <ul>
                    {
                        this.state.tasks.map((task, index) => {
                            return <TodoItem 
                                key={index} clickHandler={this.changeStatus}
                                index={index} details={task}
                                deleteTask={this.deleteTask}
                                editTask={this.editTask}
                            />
                        })
                    }
                </ul>
            </section>
        )
    }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
