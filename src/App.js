import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Header from './components/Header';
import './App.css';

import AdminPage from './components/AdminPage';
import LoginModal from './components/LoginPage'; // Assuming this is your login modal component
import ChatClient from './components/ChatClient';
import { AuthProvider, useAuth } from './context/AuthContext';
import Homepage from './components/Homepage';
import CRSForm from './components/CRSForm';
import Consultation from './components/ConsultationForm';
import NewsAlerts from './components/NewsAlerts';
import Footer from './components/Footer';


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
    const [isChatOpen, setIsChatOpen] = useState(false);
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
         
            <Header />
            
            <Routes>
                
                <Route path="/" element={<Homepage />} />
                <Route path="/free-assessment" element={<CRSForm />} />
                <Route path="/consultation" element={<Consultation />} />
                <Route path="/news-alerts" element={<NewsAlerts />} />
                <Route path="/admin" element={
                    isAuthenticated ? <AdminPage /> : <Navigate to="/login" />
                } />
                <Route path="/login" element={<LoginModal />} />
                

                {/* Other routes */}
            </Routes>
            <Footer />
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

