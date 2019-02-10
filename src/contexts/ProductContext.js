import React, { Component } from 'react';

export const ProductContext = React.createContext();

export class ProductProvider extends Component {
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
        return (
            <ProductContext.Provider
                value={{
                    products: this.state.products
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}