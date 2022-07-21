import React from 'react';
import './Navbar.css';

export default function Navbar() {

  return (
    <nav>
    <div className='logo'>Resume</div>
    <input type="checkbox" id="click"></input>
    <label for="click" className='menu-btn'>
      <i className='fas fa-bars'></i>
    </label>
      <ul>
      <li><a href='#profile'>Profile</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
  )
}
