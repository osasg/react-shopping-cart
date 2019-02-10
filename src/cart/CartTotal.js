import React, { Component } from 'react';

import ButtonRed from '../components/ButtonRed';

import './CartTotal.css';

class CartTotal extends Component {
    componentDidMount() {
        window.addEventListener('scroll', scrollCartTotal);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', scrollCartTotal);
    }

    render() {
        return (
            <div className="total">
                <div className="total-info">
                    <div className="info-count">
                        <span>Count</span>
                        <span className="count">54</span>
                    </div>
                    <div className="info-money">
                        <span>Money</span>
                        <span className="money">1250000</span>
                    </div>
                </div>
                <div className="total-buy">
                    <ButtonRed>Proceed to checkout</ButtonRed>
                </div>
            </div>
        );
    }
}

function scrollCartTotal(e) {
    const total = document.querySelector('.total');
    const container = document.querySelector('.cart-total');
    
    const min = container.offsetTop;
    const max = container.offsetTop + container.offsetHeight - total.offsetHeight - 100;

    if (window.scrollY > min && window.scrollY < max) {
        total.classList.add('scroll-active');
    } else {
        total.classList.remove('scroll-active');
    }
}

export default CartTotal;