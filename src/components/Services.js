import React, { useState } from 'react';
import './Services.css'; // For styling

const visaTypes = [
    { id: 1, name: 'Study Visa', description: 'Detailed info about Study Visa...' },
    { id: 2, name: 'LMIA / Work Visa', description: 'Detailed info about LMIA / Work Visa...' },
    { id: 3, name: 'Startup Visa', description: 'Detailed info about Startup Visa...' },
    { id: 4, name: 'Visitor Visa', description: 'Detailed info about Visitor Visa...' },
    { id: 5, name: 'PNP', description: 'Detailed info about PNP...' },
    { id: 6, name: 'PR Program', description: 'Detailed info about PR Program...' },
];

function Services() {
    const [selectedVisa, setSelectedVisa] = useState(null);

    const openDetails = (visa) => {
        setSelectedVisa(visa);
    };

    const closeDetails = () => {
        setSelectedVisa(null);
    };

    return (
        <div className="services-section">
            <h1 className="services-heading">Immigration Services</h1>

            <div className="services-container" id="services">
                {visaTypes.map((visa) => (
                    <div key={visa.id} className="visa-type" onClick={() => openDetails(visa)}>
                        <h3>{visa.name}</h3>
                        <button>Read More</button>
                    </div>
                ))}

                {selectedVisa && (
                    <div className="overlay">
                        <div className="overlay-content">
                            <h2>{selectedVisa.name}</h2>
                            <p>{selectedVisa.description}</p>
                            <button onClick={closeDetails}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Services;
