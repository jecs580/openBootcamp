import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { leves } from '../../models/leves.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = (props) => {
    const defaultTask= new Task('Example','default description',false, leves.NORMAL);
    return (
    <div>
        <div>
            <h1>Your Tasks:</h1>
        </div>
        <TaskComponent task={defaultTask}/>
    </div>
  )
}

TaskListComponent.propTypes = {

}

export default TaskListComponent;