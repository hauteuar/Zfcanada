import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './ImageSlider.css'; // Import custom styles

const images = [
    { url: '/images/BackgroundImage.jpg', caption: 'Want to Study in Canada?' },
    { url: '/images/news1.webp', caption: 'Work in Canada' },
    // Add more images as needed
];

const ImageSlider = () => {
    return (
        <AwesomeSlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={200} // interval in milliseconds
            bullets={false} // to hide the navigation bullets
        >
            {images.map((image, index) => (
                <div key={index} data-src={image.url}>
                    <h2 className="slider-caption">{image.caption}</h2>
                </div>
            ))}
        </AwesomeSlider>
    );
};

export default ImageSlider;
