import React, { Component } from 'react';

import Product from '../products/Product';

import './ProductListing.css';

class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        const url = 'https://gist.githubusercontent.com/quangdatpham/30a5552e8286013d651feaeb2b783d9a/raw/9fd6fc55d576eeb040d944b5993d1767d7b2ec64/react-shopping-cart.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    products: data.products
                });
            });
    }

    render() {
        const { products } = this.state;
        const listProduct = products.map(
            p => (
                <div key={p.id} className={'product-item product-' + p.id}>
                    <Product name={p.name} price={p.price}/>
                </div>
            )
        );

        return (
            <div className='product-listing'>
                {listProduct}
            </div>
        );
    }
}

export default ProductListing;