import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(MyAuthContext);

    if (loading) {
        return console.log("Loading")
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivateRoute