import React from 'react';
import Ads from './Ads';

import './AdsHome.css';

export default function AdsHome() {
    return (
        <div className="ads-home">
            <div className="ads-home-left">
                <Ads
                    flexBasis="100%"
                    height={800}
                    src="https://source.unsplash.com/200x800"
                />
            </div>
            <div className="ads-home-middle">
                <Ads flexBasis="100%" height={400} />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
            </div>
            <div className="ads-home-right">
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
                <Ads flexBasis="50%" />
            </div>
        </div>
    );
}