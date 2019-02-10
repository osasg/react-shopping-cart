import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CartItem.css';

class CartItem extends Component {
    render() {
        const { name, price, quantity } = this.props;

        return (
            <div className="cart-item">
                <div className="cart-item-info">
                    <Link to="#">
                        <div className="item-img">
                            <img src="https://source.unsplash.com/800x640" alt="name" />
                        </div>
                        <div className="item-info">
                            <div className="item-info-name">
                                <span>{ name }</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="cart-item-action">
                    <div className="quantity">
                        <div className="quantity-price">
                            <span>{ price }</span>
                        </div>
                        <div className="quantity-alter">
                            <span className="group-btn">
                                <button className="btn-down">-</button>
                            </span>

                            <input defaultValue={quantity}/>
                            
                            <span className="group-btn">
                                <button className="btn-up">+</button>
                            </span>     
                        </div>
                        <div className="quantity-money">
                            <span>2200</span>
                        </div>
                    </div>
                    <div className="remove">
                        <Link to="#">Remove</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;