import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//importando la hoja de estilo de task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task ${task.name} is going to unmount`);
        };
    }, [task]);


    /**
     * funtion that returns a bagde
     * depending on the level of task
     */
    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'><span className='badge bg-secondary'>{task.level}</span></h6>);
            case LEVELS.URGENTE:
                return (<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>);
            default:
                return (<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>);
        }
    }

    /**
     * function that returns an icon
     * depending on the value of completed
     */
    const taskCompletedIcon = () => {
        if (task.completed) {
            return (<i onClick={() => complete(task)}
                className='bi-toggle-on task-action'
                style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => complete(task)}
                className='bi-toggle-off task-action'
                style={{ color: 'grey' }}></i>)
        }
    }

    // Definienfo estilo en un objeto jsx
    const taskIncompleted = {
        fontWeight: "bold",
        color: "tomato",
    } 

    // Definienfo estilo en un objeto jsx
    const taskcompleted = {
        color: "gray",
        textDecoration: "line-through"
    } 

    return (
        // Renderizado condicional de los stilos definidos anterior mente
        <tr className='fw-normal' style={task.completed ? taskcompleted : taskIncompleted}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return a bagde */}
                <span>{taskLevelBadge()}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of fucntion to return an icon */}
                {taskCompletedIcon()}
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{ color: 'tomato' }}></i>
                {/* <span>{task.completed ? 'COMPLETED' : 'PENDING'}</span> */}
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default TaskComponent;
