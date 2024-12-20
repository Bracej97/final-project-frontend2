import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
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
import AddEvent from './pages/AddEvent'
import EditEvent from './pages/EditEvent'




function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Header />
        <div style= {{ marginTop:"32px" }} />
        <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<FAQS />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="events/get/:id" element={<EventDetails />} />
          <Route path="/events/add" element={<AddEvent />} />
          <Route path="/events/update/:id" element={<EditEvent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      </Router>
    </UserProvider>
    </>
  );
}

export default App
