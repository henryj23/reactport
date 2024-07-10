import React, { useState } from "react";
import './Socials.css';
import code from './../../assets/logo/code.png';
import github from './../../assets/logo/github.png';
import gmail from './../../assets/logo/gmail.png';
import link from './../../assets/logo/link.png';
import Notification from './Notification'; // Make sure to adjust the path as needed

const Socials = () => {
    const [notification, setNotification] = useState('');

    const handleEmailClick = () => {
        navigator.clipboard.writeText('henryajames23@gmail.com').then(() => {
            setNotification('Email address copied to clipboard');
        }, () => {
            setNotification('Failed to copy email address');
        });
    }

    return (
        <div className="Social-box">
            {notification && <Notification message={notification} onClose={() => setNotification('')} />}
            <a href="https://github.com/henryj23/React-Portfolio.git" target="_blank" rel="noopener noreferrer">
                <img src={code} alt="Code" className="social-icon" />
            </a>
            <a href="https://github.com/henryj23" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="social-icon" />
            </a>
            <button
                onClick={handleEmailClick}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
                <img src={gmail} alt="Gmail" className="social-icon" />
            </button>
            <a href="https://www.linkedin.com/in/henry-james-9355742b8/" target="_blank" rel="noopener noreferrer">
                <img src={link} alt="LinkedIn" className="social-icon" />
            </a>
        </div>
    );
}

export default Socials;