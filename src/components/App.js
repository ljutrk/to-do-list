import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import { addNewTask } from '../actions'

class App extends Component {
    state = {
        newTaskText: "",
        view: "all"
    }

    submitHandler = e => {
        e.preventDefault();
        const { addNewTask, tasks } = this.props;
        const { newTaskText } = this.state;

        addNewTask(tasks.length + 1, newTaskText)
        this.setState({ newTaskText: "" })
    }

    render() {
        const { newTaskText, view } = this.state;

        return (
            <div className="app">
                <h1 className="app-heading">To Do List!</h1>
                <div className="buttons">
                    <button className="buttons-to-do" onClick={() => this.setState({ view: "todo" })}>To Do</button>
                    <button className="buttons-done" onClick={() => this.setState({ view: "done" })}>Done</button>
                    <button className="buttons-all" onClick={() => this.setState({ view: "all" })}>All</button>
                </div>
                <div>
                    <form className="task-new" onSubmit={this.submitHandler}>
                        <input type="text" value={newTaskText} onChange={(e) => this.setState({ newTaskText: e.target.value })} />
                        <button type="submit"><i className="fas fa-plus"></i></button>
                    </form>
                </div>
                <TaskList view={view} />
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addNewTask })(App);