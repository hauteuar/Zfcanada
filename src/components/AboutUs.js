import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faHandsHelping, faUserTie, faFlag } from '@fortawesome/free-solid-svg-icons';
import './AboutUs.css'; // Assuming you'll create a separate CSS file for styling

function AboutUs() {
    return (
        <div className="about-container">
            <div  text-align="center"> <h1>ABOUT US</h1> </div>
            <h1>Who Are We?</h1>
            <p>ZFCanada is an immigration firm formed with the purpose of providing quick and easy legal immigration to Canada...</p>

            <div className="features-grid">
                <div className="feature">
                    <FontAwesomeIcon icon={faBalanceScale} />
                    <h2>Integrity in our Actions</h2>
                    <p>We operate under a strict code of conduct ensuring integrity and honesty in all our actions.</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faHandsHelping} />
                    <h2>We Care</h2>
                    <p>Working closely with each client in strictest confidentiality, we aim for the highest quality results.</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faUserTie} />
                    <h2>Professional Service</h2>
                    <p>Our team of experts provides professional service, ensuring a smooth immigration process.</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faFlag} />
                    <h2>We are Unique</h2>
                    <p>Our unique process and diligent updates from overseas embassies keep us ahead.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
