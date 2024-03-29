import React, { useState } from 'react';
import './CRSForm.css'; // Ensure you have the CSS file




const CRSForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        maritalStatus: '',
        age: '',
        education: '',
        languageProficiency: '',
        canadianExperience: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically save the form data
        console.log(formData);
        setSubmitted(true);
        alert("Zfcanada will get back to you after the initial assessment.");
    };

    if (submitted) {
        return <div className="form-submitted">Thank you for submitting your information!</div>;
    }

    return (
        <div className="form-container" style={{ marginTop: '10%' }}>
            <form onSubmit={handleSubmit}>
             
                <h2>CRS Assessment Form</h2>
            <div>
                <div>
                    <label>
                        Full Name:
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Marital Status:
                        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
                            <option value="">Select</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="commonLaw">Common-Law</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                            <option value="separated">Separated</option>
                        </select>
                    </label>
                </div>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Education Level:
                    <select name="education" value={formData.education} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="lessThanSecondary">Less than secondary school</option>
                        <option value="secondaryDiploma">Secondary diploma (high school graduation)</option>
                        <option value="oneYearDegree">One-year degree, diploma or certificate</option>
                        <option value="twoYearDegree">Two-year program at a university, college, trade or technical school, or other institute</option>
                        <option value="bachelorOrHigher">Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute</option>
                        {/* Add other options based on the CRS scoring */}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Official Language Proficiency:
                    <select name="languageProficiency" value={formData.languageProficiency} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="noneOrLow">None or Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                        {/* Adjust options based on your criteria */}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Canadian Work Experience:
                    <select name="canadianExperience" value={formData.canadianExperience} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="none">None</option>
                        <option value="oneOrTwoYears">1 or 2 Years</option>
                        <option value="threeOrMoreYears">3 Years or More</option>
                    </select>
                </label>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CRSForm;
