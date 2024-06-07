import React, { useEffect, useRef } from "react";
import "./home.css";

const Home = () => {
  const slidesRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    const slides = slidesRef.current;
    const slide = slides.querySelectorAll(".slide");
    let index = 0;

    const showSlide = (n) => {
      index += n;
      if (index >= slide.length) {
        index = 0;
      }
      if (index < 0) {
        index = slide.length - 1;
      }
      slides.style.transform = "translateX(" + -index * 100 + "%)";
    };

    prevBtn.addEventListener("click", () => showSlide(-1));
    nextBtn.addEventListener("click", () => showSlide(1));

    return () => {
      window.onscroll = null;
      prevBtn.removeEventListener("click", () => showSlide(-1));
      nextBtn.removeEventListener("click", () => showSlide(1));
    };
  }, []);

  return (
    <div className="mainContainer">
      <div className="container">
        <h1>Welcome to Wisdom Wave</h1>
        <p>Surf The Future Of Learning</p>
        <a href="#features" className="cta-button">
          Learn More
        </a>
      </div>
      <div className="container">
        <h1>Features</h1>
        <div className="features">
          <div className="feature-item">
            <h2>Feature 1</h2>
            <p>Detail about Feature 1.</p>
          </div>
          <div className="feature-item">
            <h2>Feature 2</h2>
            <p>Detail about Feature 2.</p>
          </div>
          <div className="feature-item">
            <h2>Feature 3</h2>
            <p>Detail about Feature 3.</p>
          </div>
        </div>
        <div className="logos">
          <img src="https://via.placeholder.com/100" alt="Logo 1" />
          <img src="https://via.placeholder.com/100" alt="Logo 2" />
          <img src="https://via.placeholder.com/100" alt="Logo 3" />
          <img src="https://via.placeholder.com/100" alt="Logo 4" />
        </div>
      </div>
      <div className="container">
        <h1>Image Slider</h1>
        <div className="slider">
          <div className="slides" ref={slidesRef}>
            <div className="slide">
              <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
            </div>
            <div className="slide">
              <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
            </div>
            <div className="slide">
              <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
            </div>
          </div>
          <div className="slider-buttons">
            <button className="slider-button" id="prevBtn" ref={prevBtnRef}>
              &#10094;
            </button>
            <button className="slider-button" id="nextBtn" ref={nextBtnRef}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
