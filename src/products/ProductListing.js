import React, { Component } from 'react';

import Product from '../products/Product';
import { ProductContext } from '../contexts/ProductContext';

import './ProductListing.css';

class ProductListing extends Component {
    render() {
        return (
            <div className='product-listing'>
                <ProductContext.Consumer>
                    {({ products }) => products.map(
                        p => (
                            <div key={p.id} className={'product-item product-' + p.id}>
                                <Product name={p.name} price={p.price}/>
                            </div>
                        )
                    )}
                </ProductContext.Consumer>
            </div>
        );
    }
}

export default ProductListing;