import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                setSent(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                    <h2>Get in Touch</h2>
                    <p><i className="fas fa-map-marker-alt"></i> Address: 123 Main Street, Anytown, AS 12345</p>
                    <p><i className="fas fa-phone"></i> Phone: (123) 456-7890</p>
                    <p><i className="fas fa-envelope"></i> Email: info@example.com</p>
                </div>
                <div>
                    {sent ? (
                        <p>Thank you for contacting us!</p>
                    ) : (
                        <form onSubmit={sendEmail}>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Name:</label>
                                <input type="text" name="user_name" required style={{ marginLeft: '10px' }} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Email:</label>
                                <input type="email" name="user_email" required style={{ marginLeft: '10px' }} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Message:</label>
                                <textarea name="message" required style={{ marginLeft: '10px' }} />
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
