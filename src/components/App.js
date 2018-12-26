import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import { addNewTask } from '../actions'
class App extends Component {
    state = { newTask: "" }

    render() {
        return (
            <div className="app">
                <h1 className="app-heading">To Do List!</h1>
                <div className="buttons">
                    <button className="buttons-to-do" onClick={() => console.log("show to-do task list")}>To Do</button>
                    <button className="buttons-done" onClick={() => console.log("show finished task list")}>Done</button>
                    <button className="buttons-all" onClick={() => console.log("show all tasks")}>All</button>
                </div>
                <div className="task-new">
                    <input type="text" value={this.state.newTask} onChange={(e) => this.setState({newTask: e.target.value})} />
                    <button onClick={() => this.props.addNewTask(this.state.newTask)}><i className="fas fa-plus"></i></button>
                </div>
                <TaskList />
            </div>
        );
    }
}

export default connect(null, { addNewTask })(App);