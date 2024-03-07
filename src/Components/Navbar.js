import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-darks navbar-expand-lg fixed-top py-3 ss" id="mainNav">
                <Link to='/sign-kit/learn-sign' className="navbar-brand mb-0 h1 robo-text">
                        Click here Learn Sign here
                </Link>
            
        </nav>  
    )
}

export default Navbar