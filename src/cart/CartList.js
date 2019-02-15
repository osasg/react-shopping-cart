import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import CartEmpty from './CartEmpty';

import './CartList.css';

class CartList extends Component {
    render() {
        return (
            <div className="cart">
                <div className="cart-list">
                    <ProductContext.Consumer>
                        {({ products }) => {
                            if (!products.length) return <h1>LOADING</h1>;
                            return <CartContext.Consumer>
                                {
                                    ({ cartItems, wrapProductAlterQuantity }) => {
                                        if (!cartItems.length) return <CartEmpty />;
                                        return cartItems.map((item, i) => {
                                            const product = products.find(p => item.id === p.id);
                                            return <CartItem
                                                key={product.id}
                                                id={product.id}
                                                name={product.name}
                                                price={product.price}
                                                quantity={item.quantity}
                                                alterQuantity={wrapProductAlterQuantity(product.id)}
                                            />;
                                        })
                                    }
                                }
                            </CartContext.Consumer>
                        }}
                    </ProductContext.Consumer>
                </div>
                <div className="cart-total">
                    <CartTotal />
                </div>
            </div>
        );
    }
}

export default CartList;