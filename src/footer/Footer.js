import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

library.add(faFacebook, faTwitter, faLinkedin, faInstagram);

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-column customer-care">
                <div className="title">
                    <span>Customer care</span>
                </div>
                <div className="content">
                    <ul class="list">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Shopping guide</a></li>
                        <li><a href="#">Transport</a></li>
                        <li><a href="#">Pay</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                        <li><a href="#">Warranty Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-column contact-us">
                <div className="title">
                    <span>Contact us</span>
                </div>
                <div className="content">
                    <div className="adress">
                        <span>Adress: xxx/xxx XXXXXX</span>
                    </div>
                    <div className="hotline">
                        <span>012-3456-789</span>
                    </div>
                    <div className="hotline">
                        <span>987-6543-210</span>
                    </div>
                </div>
            </div>
            <div className="footer-column follow-us">
                <div className="title">
                    <span>Follow us</span>
                </div>
                <div className="content">
                    <div class="social">
                        <span className="icon"><FontAwesomeIcon icon={['fab', 'facebook']} /></span>
                        <span className="name">Facebook</span>
                    </div>
                    <div class="social">
                        <span className="icon"><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
                        <span className="name">Twitter</span>
                    </div>
                    <div class="social">
                        <span className="icon"><FontAwesomeIcon icon={['fab', 'linkedin']} /></span>
                        <span className="name">Linkedin</span>
                    </div>
                    <div class="social">
                        <span className="icon"><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
                        <span className="name">Instagram</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}