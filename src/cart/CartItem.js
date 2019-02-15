import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CartItem.css';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.quantity
        }
        this.btnUp = React.createRef();
        this.btnDown = React.createRef();
        this.form = React.createRef();

        this.handleQuantityInput = this.handleQuantityInput.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }
    
    updateQuantity(e) {
        const { alterQuantity } = this.props;
        let quantity = this.state.quantity;
        
        if (e.currentTarget === this.btnUp.current) {
            quantity += 1;
        } else if (e.currentTarget === this.btnDown.current) {
            quantity -= 1;
        } else {
            e.preventDefault();
            quantity = parseInt(e.currentTarget.quantityInput.value);
        }
        
        alterQuantity(quantity);
        this.setState({
            quantity: quantity
        });
    }

    componentDidMount() {
        this.btnUp.current.addEventListener('click', this.updateQuantity);
        this.btnDown.current.addEventListener('click', this.updateQuantity);
        this.form.current.addEventListener('submit', this.updateQuantity);
    }

    handleQuantityInput(e) {
        this.setState({
            quantity: parseInt(e.target.value)
        });
    }

    render() {
        const {
            name,
            price,
            id,
            remove
        } = this.props;

        return (
            <div className="cart-item">
                <div className="cart-item-info">
                    <Link to="#">
                        <div className="item-img">
                            <img src="https://source.unsplash.com/800x640" alt="name" />
                        </div>
                        <div className="item-info">
                            <div className="item-info-name">
                                <span>{ name }</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="cart-item-action">
                    <div className="quantity">
                        <div className="quantity-price">
                            <span>{ price }</span>
                        </div>
                        <div className="quantity-alter">
                            <span className="group-btn">
                                <button ref={this.btnDown} className="btn-down">-</button>
                            </span>
                            <form ref={this.form} className="form-quantity" data-form-id={id}>
                                <input name="quantityInput" value={this.state.quantity} onChange={this.handleQuantityInput}/>
                            </form>
                            <span className="group-btn">
                                <button ref={this.btnUp} className="btn-up">+</button>
                            </span>     
                        </div>
                        <div className="quantity-money">
                            <span>0000</span>
                        </div>
                    </div>
                    <div className="remove">
                        <Link to="#" onClick={remove}>Remove</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;