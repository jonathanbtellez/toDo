import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
const AboutPage = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

    // Location.pathname return the name of current route
    console.log('We are in route: ', location.pathname); 

    // Go to a specify route
    const navigateTo = (path) => {
        navigate(path);
    }

    // Go one route back
    const goBack = () => {
        navigate(-1);
    }

    // Go one route forward
    const goForward = () => {
        navigate(1);
    }

    return (
        <div>
            <h1>About | FAQs</h1>
            <div>
                <button onClick={()=> navigate('/')}>
                    Go to Home
                </button>
                <button onClick={goBack}>
                    Go to back
                </button>
                <button onClick={goForward}>
                    Go to forward
                </button>
            </div>
        </div>
        
    );
}

export default AboutPage;
