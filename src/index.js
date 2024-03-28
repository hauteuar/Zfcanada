// In index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Adjust the import path as necessary
import reportWebVitals from './reportWebVitals';
import './index.css';
//import { AuthProvider } from './context/AuthContext'; // Adjust the import path as needed


ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
