import React from 'react';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/ButtonRed';

import './CartEmpty.css';

class CartEmpty extends React.Component {
    render() {
        return (
            <div className="cart-empty">
                <Link to="/products">
                    <ButtonRed>
                        Want to buy something?
                    </ButtonRed>
                </Link>
            </div>
        );
    }
}

export default CartEmpty;