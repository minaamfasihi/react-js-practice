import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    renderForm() {
        return(
            <form onSubmit={this.updateItem}>
                <input type="text" defaultValue={this.props.details.name} 
                    ref={(value) => {
                        this.input = value
                    }}
                />
                <button type="submit">Update Item</button>
            </form>
        )
    }

    renderItem() {
        return(
            <li onClick={() => {
                this.props.clickHandler(this.props.index);
            }} className={this.props.details.completed ? 'completed' : ''}>
                {this.props.details.name}
                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.props.deleteTask(this.props.index)
                }}>Delete</button>
                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.toggleState();
                }}>Edit</button>
            </li>
        )
    }

    updateItem(evt) {
        evt.preventDefault();
        this.props.editTask(this.props.index, this.input.value);
        this.toggleState();
    }

    toggleState() {
        const { isEditing } = this.state;
        this.setState({
            isEditing: !isEditing
        });
    }

    render() {
        const { isEditing } = this.state;
        return (
            <section>
                {
                    isEditing ? this.renderForm() : this.renderItem()
                }
                
            </section>
        )
    }
}

TodoItem.propTypes = {
    clickHandler: PropTypes.func,
    index: PropTypes.number,
    details: PropTypes.object,
    deleteTask: PropTypes.func,
    editTask: PropTypes.func
}

export default TodoItem;