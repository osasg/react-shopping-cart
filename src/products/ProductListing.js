import React, { Component } from 'react';

import Product from '../products/Product';
import { ProductContext } from '../contexts/ProductContext';

import './ProductListing.css';
import { CartContext } from '../contexts/CartContext';

class ProductListing extends Component {
    render() {
        return (
            <div className='product-listing'>
                <ProductContext.Consumer>
                    {({ products }) => {
                        if (!products.length) return <h1>LOADING</h1>;
                        return products.map(
                        p => (
                            <div key={p.id} className={'product-item product-' + p.id}>
                                <CartContext.Consumer>
                                    {({ addToCart }) =>
                                        <Product
                                            name={p.name}
                                            price={p.price}
                                            addToCart={addToCart(p.id)}
                                        />}
                                </CartContext.Consumer>
                            </div>
                        )
                    )
                }}
                </ProductContext.Consumer>
            </div>
        );
    }
}

export default ProductListing;