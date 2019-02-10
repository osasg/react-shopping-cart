import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

import './CartList.css';

class CartList extends Component {
    render() {
        return (
            <div className="cart">
                <div className="cart-list">
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                </div>
                <div className="cart-total">
                    <CartTotal />
                </div>
            </div>
        );
    }
}

export default CartList;