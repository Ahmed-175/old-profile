import React from 'react'
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <header className='side-bar'>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#services">services</a>
        <a href="#profile">profile</a> 
      </header>
    </div>
  )
}

export default Sidebar
