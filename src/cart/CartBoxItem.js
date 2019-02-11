import React from 'react';

import './CartBoxItem.css';

export default function CartBoxItem(props) {
    const { name } = props;

    return (
        <div className="boxitem">
            <div className="item-img">
                <img src="https://source.unsplash.com/800x640" alt="Item Img" />
            </div>
            <div className="item-name">
                <span>{name}</span>
            </div>
        </div>
    );
}