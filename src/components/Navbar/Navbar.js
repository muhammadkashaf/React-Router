import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper" style={{ backgroundColor: '#6a0dad' }}>
                <a href="#" class="brand-logo">Wish list</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav >

    )
}

export default Navbar;