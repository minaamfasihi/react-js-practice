import React from 'react';

import { observer } from 'mobx-react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return(
            <ul>
                {
                    this.props.todos.map((todoItem, index) => {
                        return(
                            <TodoItem 
                            key={index}
                            index={index}
                            removeTodo={this.props.removeTodo}
                            editTodo={this.props.editTodo}
                            todoItem={todoItem}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

export default observer(TodoList);