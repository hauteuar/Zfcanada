import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the import path as needed
//import { useContext } from 'react';
//import { AuthContext } from '../context/AuthContext'; // Adjust path as necessary
function LoginModal() {
    const { setAdmin } = useAuth(); // Use the correct function name as defined in your context
    const { setAuth } = useAuth();
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "adminPassword") {
            setAdmin(true); // Update admin state in context
            setAuth(true);
            navigate('/admin'); // Redirect to admin page
        } else {
            alert("Wrong password");
        }
    };

        

    return (
        <div className="login-modal">
            <div className="login-content">
                
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
