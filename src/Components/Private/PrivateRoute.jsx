import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(MyAuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='w-full h-screen flex justify-center items-center text-3xl'>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivateRoute