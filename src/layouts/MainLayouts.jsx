import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'


const MainLayouts = () => {


  return (
      <>
          <Navbar/>
      <Outlet/>
<ToastContainer position="top-right" style={{zIndex: 9999}}/>
      </>
  )
}

export default MainLayouts