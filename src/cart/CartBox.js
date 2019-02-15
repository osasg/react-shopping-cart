import React from 'react';

import CartIcon from './CartIcon';
import CartBoxList from './CartBoxList';
import { CartContext } from '../contexts/CartContext';

import './CartBox.css';

export default function CartBox(props) {
    return (
        <div className="cart-box">
            <div className="fixed-cart-list">
                <CartBoxList />
            </div>
            <div className="fixed-icon">
                <CartIcon onClick={openCartBox}/>
                <div className="total-quantity">
                    <CartContext.Consumer>
                        {({ cartItems }) => {
                            let count = cartItems.reduce((count, item) => count + item.quantity, 0);
                            return <span>{count}</span>
                        }}
                    </CartContext.Consumer>
                </div>
            </div>
        </div>
    );
}

function openCartBox(e) {
    const box = document.querySelector('.fixed-cart-list');
    box.classList.toggle('fixed-cart-list-active');
}