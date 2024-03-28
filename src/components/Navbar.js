import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav>
            <a href="/" className="brand-name">
                ZFCanada
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* icon or text */}
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li className="services-dropdown">
                        Services
                        <ul className="dropdown">
                            <li><Link to="/services/study-work">Study/Work</Link></li>
                            <li><Link to="/services/business-immigration">Business Immigration</Link></li>
                            <li><Link to="/services/visitor">Visitor</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
