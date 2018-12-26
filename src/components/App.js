import React from 'react';
import TaskList from './TaskList';

const App = () => {
    return (
        <div className="app">
            <h1 className="app-heading">To Do List!</h1>
            <div className="buttons">
                <button className="buttons-to-do" onClick={() => console.log("show to-do task list")}>To Do</button>
                <button className="buttons-done" onClick={() => console.log("show finished task list")}>Done</button>
                <button className="buttons-all" onClick={() => console.log("show all tasks")}>All</button>
            </div>
            <div className="task-new">
                <input type="text" />
                <button onClick={() => console.log("add new task to list")}><i className="fas fa-plus"></i></button>
            </div>
            <TaskList />
        </div>
    );
}

export default App;