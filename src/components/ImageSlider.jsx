import React, { useState, useEffect } from "react";
import "../styles/ImageSlider.css";

// my images
import image1 from "/myImages/Vivek1.jpg";
import image2 from "/myImages/Vivek2.jpg";
import image3 from "/myImages/Vivek3.jpeg";
import image4 from "/myImages/Vivek4.jpg";
import image5 from "/myImages/Vivek5.jpg";
import image6 from "/myImages/Vivek6.jpg";
import image7 from "/myImages/Vivek7.jpeg";

const ImageSlider = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, isPaused, images.length]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div
            className="slider-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
