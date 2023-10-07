import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import EventDetails from '../EventDetails/EventDetails';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

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
                element: <h1>About Page</h1>
            },
            {
                path: '/contact',
                element: <h1>Contact Page</h1>
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
                element: <EventDetails />,
                loader: () => fetch('/data/services.json')
            },
        ]
    }
])

export default Router