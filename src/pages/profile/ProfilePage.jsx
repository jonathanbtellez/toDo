import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const ProfilePage = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

    // Location.pathname return the name of current route
    console.log('We are in route: ', location.pathname); 

    return (
        <div>
            <h1>Your profile</h1>
            {/* Using useNavigate to go back */}
            <button onClick={()=> navigate(-1)}>
                Go back
            </button>
            <button onClick={()=> navigate('/tasks')}>
                Go to your tasks
            </button>
        </div>
    );
}

export default ProfilePage;
