import React from 'react';

import CartIcon from './CartIcon';
import CartBoxItem from './CartBoxItem';

import './CartBox.css';

export default function CartBox(props) {
    return (
        <div className="cart-box">
            <div className="list-box">
                <div className="item-container">
                    <CartBoxItem name="AAA"/>
                </div>
                <div className="item-container">
                    <CartBoxItem name="AAA"/>
                </div>
                <div className="item-container">
                    <CartBoxItem name="AAA"/>
                </div>
                <div className="item-container">
                    <CartBoxItem name="AAA"/>
                </div>
                <div className="item-container">
                    <CartBoxItem name="AAA"/>
                </div>
                <div className="item-container">
                    <CartBoxItem name="AAA"/>
                </div>
                <div className="item-container">
                    <CartBoxItem name="AAA"/>
                </div>
                <div className="item-container">
                    <CartBoxItem name="AAA"/>
                </div>
            </div>
            <div className="icon">
                <CartIcon onClick={openCartBox}/>
            </div>
        </div>
    );
}

function openCartBox(e) {
    console.log('Clicked');
    const box = document.querySelector('.list-box');
    box.classList.toggle('list-box-active');
}