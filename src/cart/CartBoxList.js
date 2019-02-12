import React from 'react';

import CartBoxItem from './CartBoxItem';

import './CartBoxList.css';

export default function CartBoxList() {
    return (
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
    );
}