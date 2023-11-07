import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className='header_navigation'>
      <div className='header_title'>
        <p>Tomisin's Portfolio</p>
      </div>
      <div className='header_links'>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header
