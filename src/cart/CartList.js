import React, { Component } from 'react';
import CartItem from './CartItem';
import Total from './Total';

import './CartList.css';

class CartList extends Component {
    render() {
        return (
            <div className="cart">
                <div className="list">
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                    <CartItem name="AAA" price={1200} quantity={12} />
                </div>
                <Total />
            </div>
        );
    }
}

export default CartList;