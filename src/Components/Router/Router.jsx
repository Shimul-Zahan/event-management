import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import EventDetails from '../EventDetails/EventDetails';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import PrivateRoute from '../Private/PrivateRoute';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/data/services.json')
            },
            {
                path: '/about',
                element: <About />,
                loader: () => fetch('/data/employee.json')
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/event-details/:id',
                element: <PrivateRoute><EventDetails /></PrivateRoute>,
                loader: () => fetch('/data/services.json')
            },
        ]
    }
])

export default Router