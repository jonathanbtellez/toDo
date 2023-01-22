import React from 'react'
import RegisterFormik from '../../components/pure/forms/registerFormik'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {

  const navigate = useNavigate();

  return (
    <div>
        <h1>Register Page</h1>
          <RegisterFormik />
        <div className='text-center'>
          <Button variant="contained" onClick={()=> navigate('/login')}>I have and account</Button>
        </div>
    </div>
  )
}
