import React, { useState, useEffect } from "react";
import "../styles/Slideshow.css";

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide(1);
    }, 3000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  const nextSlide = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + images.length) % images.length);
  };

  const currentSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div key={index} className={`mySlides ${index === slideIndex ? "active" : ""}`}>
          <img src={image.src} alt={image.caption} style={{ width: "100%" }} />
          <div className="text">{image.caption}</div>
        </div>
      ))}
      <button className="prev" onClick={() => nextSlide(-1)}>&#10094;</button>
      <button className="next" onClick={() => nextSlide(1)}>&#10095;</button>
      <div style={{ textAlign: "center" }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
