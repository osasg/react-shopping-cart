import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import Product from '../products/Product';

import './BannerProduct.css';

library.add(faAngleDoubleLeft, faAngleDoubleRight);

class BannerProduct extends Component {
    constructor(props) {
        super(props);
        this.scrollWalk = 500;
    }

    componentDidMount() {
        const arrows = document.querySelectorAll('.slide-arrow .arrow');
        arrows.forEach(a => a.addEventListener('click', scrollProduct));

        function scrollProduct(e) {
            const direction = this.dataset.direction;
    
            const walk = direction === 'left' ? -500 : 500;
            const productContainer = document.querySelector('.product-container');
            const maxScrollLeft = (productContainer.scrollWidth -  productContainer.clientWidth);
    
            let scrollLeft = walk + productContainer.scrollLeft;
            if (scrollLeft < 0) {
                scrollLeft = 0;
            } else if (scrollLeft > maxScrollLeft) {
                scrollLeft = maxScrollLeft;
            }
            
            productContainer.scrollLeft = scrollLeft;
        }
    }

    render() {
        return (
            <div className="banner-product-bestselling">
                <div className="slide">
                    <div className="slide-items">
                        <div className="product-container">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                    <div className="slide-arrow">
                        <div className="arrow left" data-direction="left" onClick={this.scrollProduct}><FontAwesomeIcon icon="angle-double-left" /></div>
                        <div className="arrow right" data-direction="right" onClick={this.scrollProduct}><FontAwesomeIcon icon="angle-double-right" /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerProduct;