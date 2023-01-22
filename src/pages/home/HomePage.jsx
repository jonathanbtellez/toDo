import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // Location.pathname return the name of current route
    console.log('We are in route: ', location.pathname); 

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search:'?online=true', //query Params
        })
    }
    return (
        <div>
            <h1>Home page</h1>
            <h2>Dashboard</h2>
            <div>
                <button onClick={()=> navigateProps('/onlinestate')}>
                    Go to state
                </button>
                <button onClick={()=> navigate('/profile')}>
                    Go to profile
                </button>

            </div>
        </div>
    );
}

export default HomePage;
