import React from 'react';
import { connect } from 'react-redux';

import { removeTask } from '../actions/index'

const Task = ({text, removeTask}) => {
    return (
        <div className="task">
            <input type="checkbox" name="task-status" id="task-status" onClick={() => console.log("finished task button")} />
            <div className="task-content-wrapper">
                <p>{text}</p>
                <div className="icons-wrapper">
                    <i className="fas fa-edit" onClick={() => console.log("edit button")}></i>
                    <i className="fas fa-trash-alt" onClick={() => removeTask(text)}></i>
                </div>
            </div>
        </div>
    );
}

export default connect(null, {removeTask})(Task);