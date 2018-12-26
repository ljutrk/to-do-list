import React from 'react';

const Task = () => {
    return (
        <div className="task">
            <input type="checkbox" name="task-status" id="task-status" onClick={() => console.log("finished task button")} />
            <div className="task-content-wrapper">
                <p>Go buy some apples!</p>
                <div className="icons-wrapper">
                    <i className="fas fa-edit" onClick={() => console.log("edit button")}></i>
                    <i className="fas fa-trash-alt" onClick={() => console.log("delete button")}></i>
                </div>
            </div>
        </div>
    );
}

export default Task;