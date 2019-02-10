import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Banner from './banners/Banner';
import ProductListing from './products/ProductListing';
import AdsHome from './advertisements/AdsHome';
import Footer from './footer/Footer';
import CartList from './cart/CartList';
import { ProductProvider } from './contexts/ProductContext';

import './styles.css';
class ShoppingApp extends Component {
    render() {
        return (
            <Router>
                <ProductProvider>
                    <div className="shopping-app">
                        <Navbar />
                        <div className="container">
                            <Route path="/(products|)/" exact component={Banner} />
                            <Route path="/" exact component={AdsHome} />
                            <Route path="/products" exact component={ProductListing} />
                            <Route path="/cart" exact component={CartList} />
                            <Footer />
                        </div>
                    </div>
                </ProductProvider>
            </Router>
        );
    }
}

ReactDOM.render(
    <ShoppingApp />,
    document.getElementById('root')
);