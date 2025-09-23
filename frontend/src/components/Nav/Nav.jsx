import React from 'react';
import { Link, NavLink } from 'react-router';
import { useAuth } from '../../AuthProvider/AuthProvider';

const Nav = () => {
    const { user ,logOut} = useAuth();
    const handleLogOut=()=>{
        logOut().then(res=>{
            console.log("LogOut Successfull");
            
        }).catch(err=>{
            console.log(err);
            
        })

    }

    const authClasses = "relative inline-block px-4 py-3 text-gray-800 font-semibold  bg-black/5 backdrop-blur-md border border-gray-300/50 rounded-2xl transition-all duration-300 ease-out hover:bg-opacity-10 hover:border-opacity-70 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-400/20 active:translate-y-0 active:shadow-lg before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-gray-200/30 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 group"
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>About</NavLink></li>
                            <li><NavLink>My Jobs</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">E-JOB</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>My Jobs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-x-2">
                    {!user && <>
                        <Link
                            to="/login"
                            className={authClasses}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Login
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </Link>
                        <Link
                            to="/register"
                            className={authClasses}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                SignUp
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </>
                    }

                    {user && <button
                        onClick={handleLogOut}
                        className={authClasses}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                           LogOut
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </button>}

                    {/* <Link to={'/register'} className="btn">SignUp</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Nav;