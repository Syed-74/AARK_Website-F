

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./pages/Content";
import CareersSupport from './pages/CareersSupport';
// import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Error from './pages/Error';
import Development from './pages/Development';
import Cybersecurity from './pages/Cybersecurity';
import AIData from './pages/AIData';
import UIUX from './pages/UIUX';
import Cloud from './pages/Cloud';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/careers-support" element={<CareersSupport />} />
        {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register/create-account/admin/V2/admin-login" element={<Register/>} />
          <Route path="/admin-dashboard" element={<Admin/>} />
          <Route path="/development-services" element={<Development/>} /> 
          <Route path="/cybersecurity-services" element={<Cybersecurity/>} />
          <Route path="/AI-&-data-intelligence" element={<AIData/>} />
          <Route path="/UI/UX-design-services" element={<UIUX/>} />
          <Route path="/cloud-solutions" element={<Cloud/>} />
          <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App