import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Profile from './component/Profile'
import Logout from './component/Logout'
import UserProfile from './component/Dashboard'
import AddContact from './component/AddContact'
import ViewContact from './component/ViewContact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Profile />} >
          <Route path="" element={<Home />} />
          <Route path="add-contact" element={<AddContact />} />
          <Route path="view-contacts" element={<ViewContact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
