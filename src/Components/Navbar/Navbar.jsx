import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MyAuthContext } from '../Context/AuthContext'
import './style.css'

const Navbar = () => {

    const { user, logOut } = useContext(MyAuthContext);

    const logOutUser = () => {
        logOut().then(res => alert('Log Out')).catch(err => console.log(err))
    }

    return (
        <div className="navbar container py-8 mx-auto">
            <div className="navbar-start">
                <Link to='/' className="hidden md:block text-yellow-500 text-3xl">AlgoWebBot</Link>
                <div className="md:hidden dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="md:hidden text-yellow-500 font-bold text-xl">AlgoWebBot</Link>
                <ul className='hidden md:flex text-yellow-500 justify-center items-center md:gap-8 lg:gap-16 text-xl'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                <div>
                    <h1 className="hidden md:block text-xl text-yellow-500">Shimul</h1>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu md:hidden menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link>Settings</Link></li>
                        <li onClick={logOutUser}><Link>Logout</Link></li>
                    </ul>
                </div>
                {
                    user ?
                        <button onClick={logOutUser} className='hidden md:block btn bg-yellow-500 text-black font-thin px-8 hover:bg-yellow-500'>Logout</button> :
                        <Link to='/login'>
                            <button className='hidden md:block btn bg-yellow-500 text-black font-thin px-8 hover:bg-yellow-500'>Login</button>
                        </Link>
                }

            </div>
        </div>
    )
}

export default Navbar