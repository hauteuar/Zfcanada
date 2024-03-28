import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
    const [sent, setSent] = useState(false);

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px', // Set a max width for the form
    };

    const labelStyle = {
        marginBottom: '5px',
        marginTop: '10px',
    };

    const inputStyle = {
        marginBottom: '10px',
        height: '35px', // Ensures input and textarea have a consistent height
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const textAreaStyle = {
        ...inputStyle,
        height: '100px', // Explicitly setting the height for the textarea
    };

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
                        <p><i className="fas fa-map-marker-alt"></i> 808 Britannia Road West,
                            Suite 214,
                            Mississauga, Ontario, L5V 0A7.</p>
                        <p><i className="fas fa-phone"></i> Phone: +1 (905) 858-5589.</p>
                        <p><i className="fas fa-envelope"></i> Email: info@zfcanada.com</p>
                    </div>
                    
                <div>
                    {sent ? (
                        <p>Thank you for contacting us!</p>
                    ) : (
                        <form onSubmit={sendEmail} style={formStyle}>
                            <label style={labelStyle}>Name:</label>
                            <input type="text" name="user_name" required style={inputStyle} />

                            <label style={labelStyle}>Email:</label>
                            <input type="email" name="user_email" required style={inputStyle} />

                            <label style={labelStyle}>Message:</label>
                            <textarea name="message" required style={textAreaStyle}></textarea>

                            <button type="submit" style={{ marginTop: '10px' }}>Send</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}




export default ContactUs;
