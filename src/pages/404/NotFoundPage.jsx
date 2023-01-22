import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // Location.pathname return the name of current route
  console.log('We are in route: ', location.pathname); 

  return (
    <div>
        <h1> 404 -Page not found</h1>
        <button onClick={()=> navigate('/')}>
          Go home
        </button>
    </div>
  )
}

export default NotFoundPage;