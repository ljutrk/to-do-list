import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TaskList = ({tasks}) => {
    return (
        <div className="task-list">
            {tasks.map((task, i) => {
                return <Task text={task} key={i} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(TaskList);