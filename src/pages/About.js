import React from 'react'

import '../styles/About.css'

import AboutImage from '../assets/masala.jpg'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom"></div>
      <h1>Abot Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia,
        sunt sed at libero soluta dolorem praesentium eveniet, molestias saepe
        quasi itaque temporibus veritatis fugit. Vitae, adipisci aliquid? Rem,
        aliquid.
      </p>
    </div>
  );
}

export default About