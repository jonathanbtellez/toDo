import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

const TaskFormik = ({ add, nTask }) => {

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, 'Name too short')
            .required('Name is required'),
        description: Yup.string()
            .min(4, 'Description is too short')
            .required('Description is required'),
        completed: false,
        level: Yup.string()
            .oneOf([
                LEVELS.NORMAL, LEVELS.URGENTE, LEVELS.BLOCKING
            ], 'You must select a level')
            .required('Level is required')
    })

    const addTask = (values) => {

        // e.preventDefault();

        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        )

        add(newTask);
    }


    return (
        <div className='card my-3'>
            <h4 className='card-header'>Add task</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                // Onsubmit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    addTask(values);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <div className='card-body'>

                        <Form>
                            <label htmlFor="name" className='form-label'>Name: </label>
                            <Field
                                id="name"
                                name="name"
                                placeholder="Name"
                                type="text"
                                className='form-control mb-2'
                            />

                            {/* Username errors */}
                            {errors.name && touched.name &&
                                (
                                    // Way 1
                                    // <div className='error'>
                                    //     <p>{errors.email}</p>
                                    // </div>

                                    <ErrorMessage name="name" component="div"></ErrorMessage>

                                )
                            }

                            <label htmlFor="description" className='form-label'>Description: </label>
                            <Field
                                id="description"
                                name="description"
                                placeholder="Insert a description"
                                type="text"
                                className='form-control mb-2'
                            />

                            {/* Email errors */}
                            {errors.description && touched.description &&
                                (
                                    // Way 1
                                    // <div className='error'>
                                    //     <p>{errors.email}</p>
                                    // </div>

                                    <ErrorMessage name="description" component="div"></ErrorMessage>

                                )
                            }

                            <div id="my-radio-group" >Level</div>
                            <div role="group" aria-labelledby="my-radio-group" className='text-start mb-2'>
                                <div class="form-check">
                                    <label className='form-check-label'>
                                        <Field type="radio" name="level" value={LEVELS.NORMAL} className={'form-check-input'} />
                                        Normal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <label className='form-check-label'>
                                        <Field type="radio" name="level" value={LEVELS.URGENTE} className={'form-check-input'} />
                                        Urgent
                                    </label>
                                </div>
                                <div class="form-check">
                                    <label className='form-check-label'>
                                        <Field type="radio" name="level" value={LEVELS.BLOCKING} className={'form-check-input'} />
                                        Blocking
                                    </label>
                                </div>
                            </div>
                            {errors.level && touched.level &&
                                (
                                    // Way 1
                                    // <div className='error'>
                                    //     <p>{errors.email}</p>
                                    // </div>

                                    <ErrorMessage name="level" component="div"></ErrorMessage>

                                )
                            }
                            <button type="submit" className='btn btn-secondary'>{nTask > 0 ? "Add new task" : "Create your first task"}</button>
                            {isSubmitting ? 'Creating task' : null}
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    nTask: PropTypes.number.isRequired,
}

export default TaskFormik;
