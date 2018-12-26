import React from 'react';
import TaskList from './TaskList';

const App = () => {
    return (
        <div className="app">
            <h1 className="app-heading">To Do List!</h1>
            <div className="buttons">
                <button className="buttons-to-do">To Do</button>
                <button className="buttons-done">Done</button>
                <button className="buttons-all">All</button>
            </div>
            <div className="task-new">
                <input type="text" />
                <button><i className="fas fa-plus"></i></button>
            </div>
            <TaskList />
        </div>
    );
}

export default App;