import React, { useState, useEffect } from 'react';
import '../Homepage.css'; // Adjust the path as needed

const slides = [
    {
        image: 'images/BackgroundImage1.jpg',
        caption: 'UNLOCK YOUR POTENTIAL',
        ctaText: 'STUDY IN CANADA',
    },
    {
        image: 'images/BackgroundImage2.jpg',
        caption: 'EXPLORE YOUR OPPORTUNITIES',
        ctaText: 'WORK IN CANADA',
    },
    {
        image: 'images/BackgroundImage3.jpg',
        caption: 'EMBRACE A NEW CULTURE',
        ctaText: 'IMMIGRATE TO CANADA',
    },
    {
        image: 'images/BackgroundImage4.jpg',
        caption: 'CHART A NEW PATH',
        ctaText: 'INNOVATE IN CANADA',
    },
];

const BackgroundChanger = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % slides.length);
        }, 10000); // Change every 10 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    const { image, caption, ctaText } = slides[currentIndex];

    return (
        <div className="homepage-image-container img">
            <div className="background-changer">
                <div
                    className="bg-image slide-active"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="text-container">
                        <h1 className="main-heading">{caption}</h1>
                        <button className="ctar-button">{ctaText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundChanger;
