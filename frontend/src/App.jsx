import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Profile from './component/Profile'
import Logout from './component/Logout'
import UserProfile from './component/UserProfile'
import AddContact from './component/AddContact'
import ViewContact from './component/ViewContact'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<UserProfile />} >
          <Route path="home" element={<Home />} />
          <Route path="add-contact" element={<AddContact/>} />
          <Route path="view-contacts" element={<ViewContact />} />
        </Route>
        <Route path='/protected' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
