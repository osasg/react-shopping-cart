import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Banner from './components/Banner';

import './styles.css';
class ShoppingApp extends Component {
    render() {
        return (
            <Router>
                <div className="shopping-app">
                <Navbar />
                <Banner>
                </Banner>
            </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <ShoppingApp />,
    document.getElementById('root')
);