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
import Error from '../Error/Error';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/services.json')
            },
            {
                path: '/about',
                element: <PrivateRoute><About /></PrivateRoute>,
                loader: () => fetch('/employee.json'),
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact /></PrivateRoute>
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
                loader: () => fetch('/services.json')
            },
        ]
    }
])

export default Router