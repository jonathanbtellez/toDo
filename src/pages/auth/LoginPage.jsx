import React from 'react'
import LoginFormik from '../../components/pure/forms/loginFormik'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>
            <Button variant="contained" onClick={()=> navigate('/register')}>I don´t have ant account</Button>
        </div>
    )
}

