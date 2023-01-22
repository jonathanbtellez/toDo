import { BrowserRouter as Router, Route, Link, Routes, Navigate, useMatch, useMatches } from 'react-router-dom'
import DashBoardPage from './pages/dashBoard/DashBoard';
import NotFoundPage from './pages/404/NotFoundPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';


//! Always we create the navigate order and test this
//! then we can create the page 

function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage

  let loggedIn = true;
  return (
    <Router>
      {/* Routes */}
      <Routes>
        {/* Redirections to protecs our routes */}
        <Route
          exact path='/'
          element={
            loggedIn
              ? <Navigate to={"/dashboard"} />
              : <Navigate to={"/login"} />
          }
        />

        {/* Login Route */}
        <Route exact path='/login' element={<LoginPage />} />

        <Route exact path='/register' element={<RegisterPage />} />

        {/* DashBoard Route */}
        <Route exact path='/dashboard'
          element={
            loggedIn
            ? <DashBoardPage/>
            : <Navigate to={"/login"} />
          }
        />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;