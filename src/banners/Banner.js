import React, { Component } from 'react';

import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                {this.props.children}
            </div>
        );
    }
}

export default Banner;