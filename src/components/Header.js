
import React from 'react';
import './Header.css'; // Ensure you have a Header.css file with styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header className="site-header">
           
            <TopBar />
            <NavigationBar />

            
            
        </header>

    );
};
const TopBar = () => {
    return (
        <div className="top-bar" style={{ background: '', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <div>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#FFFFFF', marginLeft: '10px' }} /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ color: '#FFFFFF', marginLeft: '10px' }} /></a>
                <a href="https://wa.me/16476241151" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#FFFFFF', marginLeft: '10px' }} /></a>
            </div>
            <div className="contact-info">
                <a href="mailto:info@zfcanada.com" style={{ color: '#FFFFFF' }}><FontAwesomeIcon icon={faEnvelope} style={{ color: '#FFFFFF', marginRight: '5px' }} />info@zfcanada.com</a>
            </div>
            <div className="phone-info">
                <a href="tel:+16476241151" style={{ color: '#FFFFFF' }}><FontAwesomeIcon icon={faPhone} style={{ color: '#FFFFFF', marginRight: '5px' }} />+1 647 624 1151</a>
            </div>
        </div>
    );
};
const NavigationBar = () => {
    return (
        <nav className="navigation-bar" style={{ background: 'transparent', color: 'black', zIndex: '15', display: 'flex' }}>
            <div className="logo-container" style={{ marginRight: '150px' }}>
                <a href="/">
                    {/* Insert logo image here */}
                    <img src="logo.png"  alt="ZFCanada Immigration" />
                </a>
            </div>

            <div className="nav-links" style={{ color: 'black', fontSize: '16' }}>
                
                <Link to="/free-assessment">FREE ASSESSMENT</Link>
                <Link to="/consultation">FREE CONSULTATION</Link>
                <Link to="/news-alerts">NEWS & ALERTS</Link>
                    {/* Dropdown component can be further split if needed */}
                    <div className="dropdown">
                    <p>IMMIGRATE </p>
                        <div className="dropdown-content">
                            <a href="/express-entry">Express Entry</a>
                        <a href="/atlantic-immigration">Atlantic Immigration Pilot Program</a>
                        <a href="/pnp">Provincial Nominee Programs(PNP)</a>
                        <a href="/trv">Temporary Resident Visa</a>
                            {/* More dropdown links */}
                        </div>
                </div>
                <div className="dropdown" style={{ marginLeft:'15px' }}>
                    <p>STUDY  </p>
                    <div className="dropdown-content">
                        <a href="/express-entry">Express Entry</a>
                        <a href="/atlantic-immigration">Atlantic Immigration Pilot Program</a>
                        <a href="/pnp">Provincial Nominee Programs(PNP)</a>
                        <a href="/trv">Temporary Resident Visa</a>
                        {/* More dropdown links */}
                    </div>
                </div>
                <div className="dropdown" style={{ marginLeft: '15px' }}>
                    <p>WORK </p>
                    <div className="dropdown-content" >
                        <a href="/express-entry">Express Entry</a>
                        <a href="/atlantic-immigration">Atlantic Immigration Pilot Program</a>
                        <a href="/pnp">Provincial Nominee Programs(PNP)</a>
                        <a href="/trv">Temporary Resident Visa</a>
                        {/* More dropdown links */}
                    </div>
                </div>
                <div className="dropdown" style={{ marginLeft: '15px' }}>
                    <p>BUSINESS  </p>
                    <div className="dropdown-content" >
                        <a href="/express-entry">Express Entry</a>
                        <a href="/atlantic-immigration">Atlantic Immigration Pilot Program</a>
                        <a href="/pnp">Provincial Nominee Programs(PNP)</a>
                        <a href="/trv">Temporary Resident Visa</a>
                        {/* More dropdown links */}
                    </div>
                </div>

                <div className="dropdown" style={{ marginLeft: '15px' }}>
                    <p>SPONSORSHIP </p>
                    <div className="dropdown-content" >
                        <a href="/express-entry">Express Entry</a>
                        <a href="/atlantic-immigration">Atlantic Immigration Pilot Program</a>
                        <a href="/pnp">Provincial Nominee Programs(PNP)</a>
                        <a href="/trv">Temporary Resident Visa</a>
                        {/* More dropdown links */}
                    </div>
                </div>
                    {/* Other navigation links */}
                </div>
                    </nav>
    );
};


export default Header;
