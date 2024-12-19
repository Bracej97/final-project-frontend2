import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import React from 'react'
import './App.css'
import Home from './pages/home'
import FAQS from './pages/faq'
import Profile from './pages/profile'
import Events from './pages/events'
import Error from './pages/error'
import Login from './pages/login'
import Signup from './pages/signup'
import EventDetails from './pages/EventDetails'
import { UserProvider } from './contexts/UserContext'
import Header from './components/Header'




function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Header />
        <div>
          <nav>
            <ul className="sidebar">
              <li className="nav-link">
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-link">
                <Link to='/faq'>FAQ</Link>
              </li>
              <li className="nav-link">
                <Link to='/profile'>Profile</Link>
              </li>
              <li className="nav-link">
                <Link to='/events'>Events</Link>
              </li>
              <li className="nav-link">
                <Link to='/signup'>Signup</Link>
              </li>
              <li className="nav-link">
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQS />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get/:id" element={<EventDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      </Router>
    </UserProvider>
    </>
  );
}

export default App
