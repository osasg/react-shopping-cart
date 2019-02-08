import React, { Component } from 'react';

import './Ads.css';

class Ads extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { flexBasis, height, src } = this.props;
        const imgSrc = src || `https://source.unsplash.com/800x640`;
        const style ={
            flexBasis,
            height: height + 'px',
        };

        return (
            <div
                className="ads"
                style = {style}
            >
                <a href="https://www.google.com">
                    <img src={imgSrc} alt="ADS-RECT" />
                </a>
            </div>
        );
    }
}

export default Ads;