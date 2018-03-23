import React from 'react';
import { observer } from 'mobx-react';
import { extendObservable, action } from 'mobx';

class TodoItem extends React.Component {
    constructor() {
        super();
        this.todoItemLocalState = extendObservable(this, {
            isEditing: false,
            toggleEditing: action((value) => {
                this.isEditing = value;
            })
        });
    }

    renderItem = () => {
        return(
            <li>
                {this.props.todoItem}
                <button onClick={() => {
                    this.props.removeTodo(this.props.index)
                }}>
                    Delete Todo
                </button>

                <button onClick={() => {
                    this.todoItemLocalState.toggleEditing(true)
                }}>
                    Edit Todo
                </button>
            </li>
        )
    }

    renderForm = () => {
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.editTodo({
                    index: this.props.index,
                    updatedText: this.refs.editTodo.value
                })
                this.todoItemLocalState.toggleEditing(false)
            }}>
                <input defaultValue={this.props.todoItem} type="text" ref="editTodo" />
                <button type="submit">Edit Todo</button>
            </form>
        )
    }

    render() {
        return(
            <div>
                {this.todoItemLocalState.isEditing ? this.renderForm() : this.renderItem()}
            </div>
        )
    }
}

export default observer(TodoItem);