import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BannerHome from './BannerHome';
import BannerProduct from './BannerProduct';

import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <Route path="/" exact component={BannerHome}/>
                <Route path="/products" exact component={BannerProduct} />
            </div>
        );
    }
}

export default Banner;