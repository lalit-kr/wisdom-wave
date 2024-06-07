import React, { useEffect, useRef } from "react";
import './particles.css'

const Particles = () => {
  const particleContainerRef = useRef(null);
  const starBackgroundRef = useRef(null);

  useEffect(() => {
    const particleContainer = particleContainerRef.current;
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particleContainer.appendChild(particle);
    }

    const starBackground = starBackgroundRef.current;
    for (let i = 0; i < 300; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starBackground.appendChild(star);
    }
})
  return (
    <div>
      <div className="particles" ref={particleContainerRef}></div>
      <div className="star-background" ref={starBackgroundRef}></div>
    </div>
  )
}

export default Particles
