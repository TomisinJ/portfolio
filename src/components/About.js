import React from 'react';
import './About.css'; 
import cat from './cat.jpeg';

function About() {
  return (
    <div className='about_content'>
      <div className='about_image'>
        <img src={cat}/>
      </div>
      <div className='about_description'>
        <p className='about_title'>About Me</p>
        <p>I am an iOS Developer with experience developing a commercial fintech application, transitioning into Frontend development. I am passionate about creating fun practical applications. I aim to deliver great products for users, by understanding their changing needs.</p>
      </div>
      <div className='about_skills'>
        <p className='about_title'>Skills</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Swift</li>
        </ul>
      </div>
    </div>
  )
}

export default About
