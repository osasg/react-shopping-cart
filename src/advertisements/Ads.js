import React, { Component } from 'react';

import './Ads.css';

class Ads extends Component {
    render() {
        const { src } = this.props;
        const imgSrc = src || `https://source.unsplash.com/800x800`;

        return (
            <div className="ads">
                <a href="https://www.google.com">
                    <img src={imgSrc} alt="ADS-RECT" />
                </a>
            </div>
        );
    }
}

export default Ads;