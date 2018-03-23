import React from 'react';
import { observer, inject } from 'mobx-react';
import TodoList from './TodoList';

class Todos extends React.Component {
    render() {
        const { todoStore } = this.props;

        return(
            <section>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.todoStore.addTodo(this.refs.todo.value);
                    this.refs.todo.value = "";
                }}>
                    <input type="text" ref="todo" />
                    <button type="submit">Add Todo</button>
                </form>
                <TodoList 
                editTodo={todoStore.editTodo}
                removeTodo={todoStore.removeTodo} 
                todos={todoStore.todos} />                
            </section>
        )
    }
}

export default inject("todoStore")(observer(Todos));
