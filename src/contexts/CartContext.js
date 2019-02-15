import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }

        this.addToCart = this.addToCart.bind(this);
        this.wrapProductAlterQuantity = this.wrapProductAlterQuantity.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    componentDidMount() {
        const data = localStorage.getItem('cartItems');
        const cartItems = JSON.parse(data) || [];
        this.setState({ cartItems });
    }

    componentDidUpdate() {
        const data = JSON.stringify(this.state.cartItems);
        localStorage.setItem('cartItems', data);
    }

    addToCart(id) {
        return () => {
            const cartItems = this.state.cartItems.slice();
            let item = cartItems.find(item => item.id === id);

            if (!item) {
                item = { id: id, quantity: 0 };
                cartItems.push(item);
            }

            item.quantity += 1;

            this.setState({ cartItems });
        }
    }

    wrapProductAlterQuantity(id) {
        return (quantity) => {
            const cartItems = this.state.cartItems.slice();
            let item = cartItems.find(item => item.id === id);

            if (!item) return;

            item.quantity = parseInt(quantity);
            
            this.setState({ cartItems });
        }
    }

    removeItem(id) {
        return () => {
            const cartItems = this.state.cartItems.slice();
            this.setState({
                cartItems: cartItems.filter(i => i.id !== id)
            });
        }
    }

    removeAll() {
        this.setState({
            cartItems: []
        });
    }

    render() {
        return (
            <CartContext.Provider
                value={{
                    cartItems: this.state.cartItems,
                    addToCart: this.addToCart,
                    wrapProductAlterQuantity: this.wrapProductAlterQuantity,
                    removeItem: this.removeItem,
                    removeAll: this.removeAll
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}