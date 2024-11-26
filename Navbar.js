import React from 'react'
import { Link } from "react-router-dom";//utilisée dans les applications React pour importer le composant Link depuis la bibliothèque react-router-dom.

const Navbar = ({ setCategory }) => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container py-2">
                       <h3><span>World </span>News</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home"><b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><b>About</b></Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"><b>Contact Us</b></Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <b>News</b> 
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <Link type="button"className="nav-link text-light" to="/category/Technology"> Technology</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/category/Business">Business</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/category/Health">Health</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/category/Science">Science</Link>
                                    </li><li className="nav-item">
                                        <Link className="nav-link text-light" to="/category/Sports">Sports</Link>
                                    </li><li className="nav-item">
                                        <Link className="nav-link text-light" to="/category/Entertainment">Entertainment</Link>
                                    </li>
                                </ul>
                            </li>
                            <div className="mx-3">
                                <Link type="button" className="btn1 mx-2" to={'/login'}>Login</Link>
                                <Link type="button" className="btn2 mx-2" to={'/SignUpForm'}>Sign Up</Link>
                            </div>
                           

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar








