import React from 'react';

import CartBoxItem from './CartBoxItem';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

import './CartBoxList.css';

export default function CartBoxList() {
    return (
        <div className="list-box">
            <ProductContext.Consumer>
                {({ products }) => 
                    <CartContext.Consumer>
                        {({ cartItems }) =>
                            cartItems.map(item => {
                                const product = products.find(p => p.id === item.id);
                                return (
                                    <div key={item.id} className="item-container">
                                        <CartBoxItem name={product ? product.name : 'Loading'}/>
                                    </div>
                                );
                            })
                        }
                    </CartContext.Consumer>    
                }
            </ProductContext.Consumer>
        </div>
    );
}