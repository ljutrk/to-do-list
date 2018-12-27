import React from 'react';
import { connect } from 'react-redux';

import Task from './Task';

const TaskList = ({ tasks, view }) => {
    return (
        <div className="task-list">
            {view === "todo" && tasks.map((task, i) => !task.finished && <Task task={task} key={task.id} />)}
            {view === "done" && tasks.map((task, i) => task.finished && <Task task={task} key={task.id} />)}
            {view === "all" && tasks.map((task, i) => <Task task={task} key={task.id} />)}
        </div>
    );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TaskList);