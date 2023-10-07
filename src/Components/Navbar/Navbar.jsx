import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar container mx-auto py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-yellow-500 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className=" menu-sm dropdown-content mt-3  z-[1] p-2 shadow  rounded-box w-52"
                    >
                        <li className="text-lg font-bold ">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="text-lg font-bold ">
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="text-lg font-bold">
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                                }
                            >
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={"/"}>  <a className="btn btn-ghost font-bold normal-case text-3xl text-yellow-500">
                    Social <span className="text-2xl text-[#088395]">Events</span>
                </a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1 text-yellow-500">
                    <li className="text-lg font-bold mr-5">
                        {" "}
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-500" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="text-lg font-bold mr-5">
                        {" "}
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-500 " : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li className="text-lg font-bold">
                        {" "}
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-500" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'>
                    <button className="btn text-[#088395] fon font-extrabold">Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar