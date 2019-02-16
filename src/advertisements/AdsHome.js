import React from 'react';
import Ads from './Ads';

import './AdsHome.css';

export default function AdsHome() {
    return (
        <div className="ads-home">
            <div className="ads-home-left">
                <Ads src="https://source.unsplash.com/200x800" />
            </div>
            <div className="ads-home-middle">
                <Ads />
                <Ads />
                <Ads />
                <Ads />
                <Ads />
            </div>
            <div className="ads-home-right">
                <Ads />
                <Ads />
                <Ads />
                <Ads />
                <Ads />
                <Ads />
                <Ads />
                <Ads />
            </div>
        </div>
    );
}