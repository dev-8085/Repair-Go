import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import Technicians from './pages/Technician';
import MyAppointments from './pages/MyAppointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Appointment from './pages/Appointment';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Technician' element= {<Technicians/>} />
        <Route path='/Technician/:speciality' element={<Technicians />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment/>} /> {/* Updated path */}
      </Routes>
    <Footer/>
    </div>
  );
};

export default App;