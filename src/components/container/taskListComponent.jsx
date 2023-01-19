import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/taskComponent';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';



const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description2', false, LEVELS.BLOCKING);
    const defaultTask3 = new Task('Example3', 'Default description3', false, LEVELS.URGENTE);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => {
            console.log('Tasklist Component is going to unmount...')
        };
    }, [tasks]);

    const completeTask = (task) => {
        console.log('Complete this task', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;

        //We update  the state of the component and it will update the iteration of the tasks 
        //in order to show the task updated with the new list of task
        setTasks(tempTask);
    }

    const removeTask = (task) => {
        console.log('Delete this task', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    const addTask = (task) => {
        console.log('Delete this task', task);
        //const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {/* Parsing list to map, make iteration to map*/}
                    {tasks.map((task, index) => {
                        //Cadabes que se itera con un map se debe usar la clave y el valor 
                        //En este caso clave index valor task
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                remove={removeTask}>
                            </TaskComponent>)
                    })}

                </tbody>
            </table>
        )
    }

    let taskTable;

    if(tasks.length > 0){
        taskTable = <Table></Table>
    }else{
        taskTable = (
            <div>
                <h3>There are not tasks to show</h3>
                <h4>Please, create a new task</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: "gray",
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }

    return (
        <div className='container'>
            <div className='col-12'>
                <div className='card'>

                    {/* Card header(titulo) */}
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>

                    {/* Card body(contenido) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        {/* TODO: Add loading spinner */}
                        {loading ?(<p style={loadingStyle}>Loading tasks...</p>):taskTable}
                    </div>
                </div>
            </div>
            {/* Form create with react */}
            {/* <TaskForm add={addTask} nTask={tasks.length}></TaskForm> */}

            {/* Form create using formik and yup */}
            <TaskFormik add={addTask} nTask={tasks.length}></TaskFormik>

            {/* TODO: aplicar un for/map para renderizar mas de una lista */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};





export default TaskListComponent;
