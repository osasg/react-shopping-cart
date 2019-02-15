import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import CartEmpty from './CartEmpty';

import './CartList.css';
import ButtonRed from '../components/ButtonRed';

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
                                    ({ cartItems, wrapProductAlterQuantity, removeItem }) => {
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
                                                remove={removeItem(product.id)}
                                            />;
                                        })
                                    }
                                }
                            </CartContext.Consumer>
                        }}
                    </ProductContext.Consumer>
                    <CartContext.Consumer>
                        {({ removeAll, cartItems }) => {
                            if (cartItems.length === 0) return;
                            
                            return (
                                <div className="remove-all">
                                    <div onClick={removeAll}>
                                        <ButtonRed>Remove All</ButtonRed>
                                    </div>
                                </div>
                            );
                        }}
                    </CartContext.Consumer>
                </div>
                <div className="cart-total">
                    <CartTotal />
                </div>
            </div>
        );
    }
}

export default CartList;