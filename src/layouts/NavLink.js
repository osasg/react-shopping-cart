import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.css';

function NavButton(props) {
    return (
        <Link to={props.link}>
            <button className="navbar-menu-item">
                {props.value}
            </button>
        </Link>
    );
}

export default NavButton;