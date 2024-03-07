import React from 'react';
import { Link } from 'react-router-dom';
import fb from './icons/fb.png';
import insta from './icons/insta.png';
import tt from './icons/tt.png';
import ytube from './icons/ytube.png';
import linkedin from './icons/linkedin.png';
import phone from './icons/phone.png';
import location from './icons/location.png';
import email from './icons/email.png';

import './Footer.css'
function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div className="left-col">
                <div className="logo"></div>
                <div className="social-media">
                    <a href="#"><img src={fb} alt="Facebook"/></a>
                    <a href="#"><img src={insta} alt="Instagram"/></a>
                    <a href="#"><img src={tt} alt="Twitter"/></a>
                    <a href="#"><img src={ytube} alt="YouTube"/></a>
                    <a href="#"><img src={linkedin} alt="LinkedIn"/></a>
                </div>
                <br /><br />
                <p className="rights-text">Copyright © 2021 Created By Ram Ji Gupta, Sumit Kumar All Rights Reserved.</p>
                <br />
                <p><img src={location} alt="Location"/> Arya College of Engineering and IT. <br />Kukus, Jaipur-302028</p>
                <br />
                <p><img src={phone} alt="Phone"/> +91-9351-870-445<br /><img src={email} alt="Email"/>&nbsp; ssingh7296003817@gmail.com</p>
            </div>
            <div className="right-col">
                <h1 style={{ color: '#fff' }}>Our Newsletter</h1>
                <div className="border"></div>
                <br />
                <p>Enter Your Email to get our News and updates.</p>
                <form className="newsletter-form">
                    <input className="txtb" type="email" placeholder="Enter Your Email" />
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
