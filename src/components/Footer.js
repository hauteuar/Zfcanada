import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to create a Footer.css file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src="logo.png" alt="ZFCanadaLogo" className="footer-logo" />
                    <p className="footer-description">
                        "At Zfcanada, we're committed to excellence in immigration and visa services. Our team brings fervor, unwavering commitment, and a dynamic approach to crafting tailored solutions that align perfectly with the unique aspirations of each client."
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Links</h4>
                    <Link to="/immigrate">IMMIGRATE</Link>
                    <Link to="/work">WORK</Link>
                    <Link to="/study">STUDY</Link>
                    <Link to="/business">BUSINESS</Link>
                    <Link to="/sponsorship">SPONSORSHIP</Link>
                    <Link to="/settle">SETTLE</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div className="footer-section">
                    <h4>Address</h4>
                    <p>Unit number 303, 7111 syntex drive Mississauga, Canada</p>
                    <h4>E-mail</h4>
                    <p>info@zfcanada.com</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>+1 647 624 1151</p>
                    <p>+1 647 824 1151</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© ZFcanada Immigration All Rights Reserved</p>
                <p>Design & Developed By HauteU AR Technologies</p>
            </div>
        </footer>
    );
};

export default Footer;
