import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Register from './Pages/Register'
import Bookinkg from './Pages/Booking'
import ContactUs from './Pages/Contact'
import Footer from './Component/Footer'
import Login from './Pages/Login'
import Services from './Pages/Services'
import ServiceDetails from './Pages/ServiceDetails'
import UpdateComp from './Pages/UpdateComp'
import UsersData from './Pages/UsersData'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/usersdetail' element={<UsersData />} />
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path="/Booking" element={<Bookinkg/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Services/:id' element={<ServiceDetails/>}/>
        <Route path='/editform/:id' element={<UpdateComp />} />
      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App