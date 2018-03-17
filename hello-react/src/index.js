import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import $ from 'jquery';

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
                                key={index} 
                                clickHandler={this.changeStatus}
                                index={index} 
                                details={task}
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


class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            success: (data) => {
                this.setState({
                    users: data
                })
            }
        })
    }

    render() {
        const { users } = this.state;
        return(
            <ul>
                {
                    users.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        )
    }
}

class App2 extends React.Component {
    render() {
        return(
            <section>
                {React.Children.only(this.props.children)}
                {this.props.children}
            </section>
        )
    }
}

class Fetch extends React.Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            success: (data) => {
                this.setState({
                    content: data
                })
            },
            error: (err) => {
                console.log("err", err);
            }
        });
    }

    render() {
        return(
            <section>
                {this.props.children(this.state.content)}
            </section>
        )
    }
}

class App3 extends React.Component {
    render() {
        return(
            <section>
                <Fetch url="https://jsonplaceholder.typicode.com/posts">
                    {(data) => {
                        return data.map((value, key) => {
                            return <li key={key}>{value.title}</li>
                        })
                    }}
                </Fetch>

                <Fetch url="https://jsonplaceholder.typicode.com/users">
                    {(data) => {
                        return data.map((value, key) => {
                            return <li key={key}>{value.name}</li>
                        })
                    }}
                </Fetch>
            </section>
        )
    }
}

class App4 extends Component {
    constructor() {
        super();

        this.state = {
            name: ""
        };
    }

    onInputChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit = () => {
        console.log("Submit");
    }

    render() {
        return(
            <div>
                {/* <input type="text" ref={(input) => this._name = input} /> */}
                <input type="text" value={this.state.name} onChange={this.onInputChange} />
                <button disabled={this.state.name.length > 0 ? false : true} onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}


ReactDOM.render(<App4/>, document.getElementById("root"));
