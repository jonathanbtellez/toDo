import { BrowserRouter as Router, Route, Link, Routes, Navigate, useMatch, useMatches } from 'react-router-dom'

// importing page
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage.jsx';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import { LoginPage } from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {


  // validating logged 
  let logged = localStorage.getItem('credential');

  // creating list to using in pagedetails
  const taskList = [
    {
      id: 1,
      name: 'Task1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task2',
      description: 'My second task'
    },
    {
      id: 3,
      name: 'Task3',
      description: 'My third task'
    }
  ]

  // Getting information of localStorage
  useEffect(() => {
    logged = localStorage.getItem('credential');
    console.log('User logged?', logged);
  }, []);

  return (
    <div className="App">
      {/* Define a conjunct of routes */}
      <Router>
        <div>
          <aside>
            <Link to="/">|| Home |</Link>
            <Link to="/login">| Login |</Link>
            <Link to="/about">| About |</Link>
            <Link to="/faqs">| FAQs |</Link>
            <Link to="/tasks/1">| Task1 |</Link>
            <Link to="/tasks/2">| Task2 |</Link>
            <Link to="/404">| Route not found ||</Link>
          </aside>
          <main>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/onlinestate' element={<StatePage />} />
              <Route path='/login' element={
                logged
                  ? <Navigate to='/' />
                  : <LoginPage />
              }></Route>
              {/* Establishing two routes to one pages */}
              <Route path='/about' element={<AboutPage />} />
              <Route path='/faqs' element={<AboutPage />} />

              {/* All page need have a route create in this context*/}
              <Route path="/profile" element={
                // {/* Giving acess to profile route with a conditional render */}
                logged
                  ? <ProfilePage />
                  : <Navigate to='/login' />}>
              </Route>

              {/* Go to task page */}
              <Route path="/tasks" element={<TasksPage />} />

              {/* accessing to details of a task */}
              {/* We can use props in our components that are into element */}
              <Route 
                exact path="/tasks/:id"              
                element={<TaskDetailPage task={taskList}/>} 
              />

              {/* Always is good practice use at the end the page NotFound 404 */}
              <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRoutingOne;
