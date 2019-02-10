import React from 'react';

import './ButtonRed.css';

export default function ButtonRed(props) {
    return (
        <button className="btn-red">
            {props.children}
        </button>
    );
}