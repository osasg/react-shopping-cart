import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Banner from './banners/Banner';
import BannerHome from './banners/BannerHome';
import BannerProduct from './banners/BannerProduct';
import ProductListing from './products/ProductListing';
import AdsHome from './advertisements/AdsHome';

import './styles.css';
class ShoppingApp extends Component {
    render() {
        return (
            <Router>
                <div className="shopping-app">
                    <Navbar />
                    <div className="container">
                        <Banner>
                            <Route path="/" exact component={BannerHome}/>
                            <Route path="/products" exact component={BannerProduct} />
                        </Banner>
                        <Route path="/" exact component={AdsHome} />
                        <Route path="/products" exact component={ProductListing} />
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <ShoppingApp />,
    document.getElementById('root')
);