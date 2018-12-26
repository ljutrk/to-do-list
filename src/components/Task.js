import React from 'react';

const Task = () => {
    return (
        <div className="task">
            <input type="checkbox" name="task-status" id="task-status" />
            <div className="task-content-wrapper">
                <p>Go buy some apples!</p>
                <div className="icons-wrapper">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>
    );
}

export default Task;