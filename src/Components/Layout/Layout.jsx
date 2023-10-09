import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Layout