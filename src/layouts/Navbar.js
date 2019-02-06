import React, { Component } from 'react';

import NavLink from './NavLink';
import Login from './Login';

import logo from '../logo.png';
import './Navbar.css';

class Navbar extends Component {
    render() {
       return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-menu">
                    <NavLink value="Home" link="/" />
                    <NavLink value="Products" link="/products" />
                    <NavLink value="Service" link="/services" />
                    <NavLink value="Contact" link="/contact" />
                </div>
                <div className="navbar-right">
                    <Login />
                </div>
            </div>
        </nav>
       );
    }
}

export default Navbar;