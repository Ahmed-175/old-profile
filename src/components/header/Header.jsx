import React from 'react';
import "./header.css";

function Header() {
  return (
    <div>
      <header className='header'>
        <a href="#home" className="logo">ahmed.js</a>

        <div className="share">
      <a href="#" className="fab fa-facebook-f" style={{ '--color': '#0072b1' }}></a>
      <a href="#" className="fa-brands fa-x-twitter"style={{ '--color': '#ff0050' }}></a>
      <a href="#" className="fab fa-instagram" style={{ '--color': '#e1306c' }}></a>
      <a href="#" className="fab fa-linkedin" style={{ '--color': '#4267b2' }}></a>

    </div>
      </header>
    </div>
  )
}

export default Header
