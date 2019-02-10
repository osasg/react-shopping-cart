import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';
import ButtonRed from '../components/ButtonRed';

import logo from '../logo.png';
import './Navbar.css';

class Navbar extends Component {
    render() {
       return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-menu">
                    <NavLink value="Home" link="/" />
                    <NavLink value="Products" link="/products" />
                    <NavLink value="Cart" link="/cart" />
                    <NavLink value="Contact" link="/contact" />
                </div>
                <div className="navbar-right">
                    <Link to="/login"><ButtonRed>Login</ButtonRed></Link>
                </div>
            </div>
        </nav>
       );
    }
}

export default Navbar;