import React from 'react';

// UseParams nos permite renderizar compenetes segun el parametro de la URI
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({ task }) => {

    // const { id } = useParams();

    let params = useParams();

    const currentTask = task[params.id]

    return (
        <div>
            
            <h1>Task detail - {currentTask.id}</h1>
            <h2>{currentTask.name}</h2>
            <h2>{currentTask.description}</h2>
        </div>
    );
}

export default TaskDetailPage;
