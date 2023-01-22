import React from 'react';
import { useNavigate } from 'react-router-dom';
 
//Components
import Copyright from '../../components/pure/Copyright';

// MUI
import Button from '@mui/material/Button';

const DashBoardPage = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate("/login")
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Log out</Button>
            <Copyright/>
        </div>
    );
}

export default DashBoardPage;
