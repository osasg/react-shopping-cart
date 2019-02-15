import React, { Component } from 'react';

import './Product.css';

class Product extends Component {
    render() {
        const { name, price, addToCart } = this.props;

        return (
            <div className="product">
                <div className="product-image">
                    <img src="https://source.unsplash.com/800x640" alt="name" />
                </div>
                <div className="product-content">
                    <div className="product-content-name">
                        <span>{ name }</span>
                    </div>
                    <div className="product-content-price">
                        <span>{ price }</span>
                    </div>
                </div>
                <div className="product-action">
                    <button className="product-action-view">View</button>
                    <button onClick={addToCart} className="product-action-buy">Buy</button>
                </div>
            </div>
        );
    }
}

export default Product;