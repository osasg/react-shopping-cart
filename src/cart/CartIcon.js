import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './CartIcon.css';

library.add(faShoppingCart);

export default function CartIcon(props) {
    return (
        <div className="cart-icon" onClick={props.onClick}>
            <FontAwesomeIcon icon="shopping-cart" />
        </div>
    );
}