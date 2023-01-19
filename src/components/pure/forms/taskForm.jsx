import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskForm = ({ add,nTask }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);


    const addTask = (e) => {

        e.preventDefault();

        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )

        add(newTask);
    }

    return (
        <div className='container my-3'>
            <h4>Add task</h4>
            <form onSubmit={addTask}
                className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                    <label
                        htmlFor='inputName'
                        className='form-label'>
                        Name
                    </label>
                    <input
                        ref={nameRef}
                        id='inputName'
                        type='text'
                        className='form-control form-control-lg'
                        required
                        autoFocus
                        placeholder='Ingrese su nombre'>
                    </input>
                    <label
                        htmlFor='inputDescription'
                        className='form-label'>
                        Description
                    </label>
                    <input
                        ref={descriptionRef}
                        id='inputDescription'
                        type='text'
                        className='form-control form-control-lg'
                        required
                        placeholder='Ingrese su apellido'>
                    </input>
                    <label
                        htmlFor='selectLevel'
                        className='form-label'>
                        Priority
                    </label>
                    <select
                        ref={levelRef}
                        defaultValue={LEVELS.NORMAL}
                        id='selectLevel'
                        className='form-select'
                    >
                        <option
                            value={LEVELS.NORMAL}>
                            Normal
                        </option>
                        <option
                            value={LEVELS.URGENTE}>
                            Urgent
                        </option>
                        <option
                            value={LEVELS.BLOCKING}>
                            Blocking
                        </option>
                    </select>
                    <button
                        type='submit'
                        className='btn btn-success btn-lg mt-3'>
                        {nTask > 0? "Add new task":"Create your first task"}
                    </button>
                </div>
            </form>
        </div>
    );
};

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    nTask: PropTypes.number.isRequired,
}

export default TaskForm;