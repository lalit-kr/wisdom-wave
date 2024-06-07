import React, { useEffect, useRef } from "react";
import './navbar.css';

const Navbar = () => {
  const navbarRef = useRef(null);
  useEffect(() => {
    const navbar = navbarRef.current;
    const sticky = navbar.offsetTop;
    const stickNavbar = () => {
        if (window.pageYOffset > sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      };
  
      window.onscroll = stickNavbar;
  })
  return (
    <div className="navbar" id="navbar" ref={navbarRef}>
        <div className="logo">
          <a href="/" style={{ fontSize: "20px" }}>
            Wisdom Wave
          </a>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
          <a href="/login">Login</a>
        </div>
      </div>
  )
}

export default Navbar
