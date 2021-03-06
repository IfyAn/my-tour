import React from 'react'
import './Navbar.scss'
import logo from '../../logo.jpg'

export default function Navbar() {
    return (
     <nav className='navbar'>
        <img src={logo} alt="city tour logo"/>
        <ul className='nav-links'>
            <li>
                <a href="/" className='nav-link'>Home</a>
            </li>
            <li>
                <a href="about" className='nav-link'>About</a>
            </li>
            <li>
                <a href="tour" className='nav-link active'>Tour</a>
            </li>
        </ul>
     </nav>
    )
}
