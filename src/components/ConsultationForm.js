import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Consultation.css'
const FreeConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        date: new Date(),
        time: '', // Assuming time as a string HH:mm format
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setFormData(prevState => ({
            ...prevState,
            date
        }));
    };
    const handleTimeChange = (e) => {
        const { name, value } = e.target; // 'name' would be "time" here
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, including data validation and sending email
        console.log("Form Data: ", formData);
        // Send data to your server here
        alert("Your consultation has been scheduled. Zfcanada will get back to you shortly.");
    };

    return (
        <div className="form-box" style={{ marginTop: '30%' }}>
        <form onSubmit={handleSubmit}>
            <div >
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Phone:
                        <input type="phone" name="phone" value={formData.email} onChange={handleChange} required />
                    </label>
            <label>
                Pick a date for your consultation:
                <DatePicker selected={formData.date} onChange={handleDateChange} />
                    </label>
                    <label>
                        Pick a time for your consultation:
                        <input type="time" name="time" value={formData.time} onChange={handleTimeChange} required />
                    </label>
            <button type="submit">Schedule Meeting</button>
            </div>
            </form>
        </div>
    );
};

export default FreeConsultationForm;
