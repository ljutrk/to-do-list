import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTask, editTask } from '../actions/index'

class Task extends Component {
    state = {
        editedText: this.props.task.text,
        editMode: false
    }

    submitHandler = e => {
        e.preventDefault();
        const { task, editTask } = this.props;
        const { editedText } = this.state;

        editTask(task.id, editedText);
        this.setState({ editMode: false });
    }

    renderEditInput = () => {
        const { editedText } = this.state;
        const { task } = this.props;

        return (
            <form onSubmit={this.submitHandler}>
                <input className="task-edit-input"
                    autoFocus
                    value={editedText}
                    onChange={e => this.setState({ editedText: e.target.value })}
                    onBlur={() => this.setState({ editMode: false })}
                    onKeyDown={e => e.keyCode === 27 && this.setState({ editMode: false, editedText: task.text })}
                />
            </form>
        )
    }

    render() {
        const { removeTask, task } = this.props;
        const { editMode } = this.state;

        return (
            <div className="task">
                <input type="checkbox" name="task-status" id="task-status" onClick={() => console.log("finished task button")} />
                <div className="task-content-wrapper">
                    {editMode ? this.renderEditInput() : <p>{task.text}</p>}
                    <div className="icons-wrapper">
                        <i className="fas fa-edit" onClick={() => this.setState({ editMode: true })}></i>
                        <i className="fas fa-trash-alt" onClick={() => removeTask(task.id)}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { removeTask, editTask })(Task);