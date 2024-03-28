import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!login(email, password)) {
            alert('Authentication failed');
        }
    };

    if (isAuthenticated) {
        return <Navigate replace to="/admin" />;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
