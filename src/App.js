import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll'; // For smooth scrolling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import Home from './components/Home';
import AdminPage from './components/AdminPage';
import LoginModal from './components/LoginPage'; // Assuming this is your login modal component
import ChatClient from './components/ChatClient';
import { AuthProvider, useAuth } from './context/AuthContext';

// Create a function to use the useLocation hook
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        return (
            <Component {...props} location={location} />
        );
    }

    return ComponentWithRouterProp;
}

function App({ location }) {
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [setIsAdmin] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const toggleChat = () => setIsChatOpen(!isChatOpen);
    const { isAuthenticated } = useAuth(); // Adjust based on your AuthContext implementation

    useEffect(() => {
        // Trigger login modal only when navigating to /admin and not authenticated
        if (location.pathname === '/admin' && !isAuthenticated) {
            setShowLoginModal(true);
        } else {
            setShowLoginModal(false);
        }
    }, [location, isAuthenticated]);

    return (
        <>
            <header className="fixed-header">
                <div className="logo-container">
                    <img src="logo.png" alt="Logo" className="logo" />
                </div>
                <nav className="navigation">
                    <ul>

                        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
                        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                        <li><Link to="sucess" smooth={true} duration={500}>Success Stories</Link></li>
                        <li><Link to="contact-us" smooth={true} duration={500}>Contact Us</Link></li>
                        <li><Link to="news-alerts" smooth={true} duration={500}>News & Alerts</Link></li>
                        
                    </ul>
                </nav>
                <div className="social-and-chat">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <button onClick={toggleChat} className="chat-button">Chat With Us</button>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={
                    isAuthenticated ? <AdminPage /> : <Navigate to="/login" />
                } />
                <Route path="/login" element={<LoginModal />} />
                

                {/* Other routes */}
            </Routes>
            {isChatOpen && <ChatOverlay onClose={toggleChat} />}
            {showLoginModal && <LoginModal setIsAdmin={setIsAdmin} setShowModal={setShowLoginModal} />}
        </>
    );
}
function ChatOverlay({ onClose }) {
    return (
        <div className="chat-overlay">
            <div className="chat-window">
                {<ChatClient />}
                <button onClick={onClose} className="close-chat">Close Chat</button>
            </div>
        </div>
    );
}

// Wrap App component with withRouter to have access to location prop
const AppWithRouter = withRouter(App);

function AppContainer() {
    return (
        <AuthProvider>
            <Router>
                <AppWithRouter />
            </Router>
        </AuthProvider>
    );
}

export default AppContainer;

