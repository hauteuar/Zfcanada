import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false); // Added state to track admin status

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        setIsAdmin(false); // Ensure admin status is also reset on logout
    };

    // Function to set admin status
    const setAdmin = (status) => setIsAdmin(status);
    const setAuth = (status) => setIsAuthenticated(status);


    return (
        <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout, setAdmin, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
