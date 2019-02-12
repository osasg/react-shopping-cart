import React from 'react';

import CartIcon from './CartIcon';
import CartBoxList from './CartBoxList';

import './CartBox.css';

export default function CartBox(props) {
    return (
        <div className="cart-box">
            <div className="fixed-cart-list">
                <CartBoxList />
            </div>
            <div className="fixed-icon">
                <CartIcon onClick={openCartBox}/>
            </div>
        </div>
    );
}

function openCartBox(e) {
    const box = document.querySelector('.fixed-cart-list');
    box.classList.toggle('fixed-cart-list-active');
}