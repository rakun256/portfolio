import React from 'react';
import './aboutMe.css';
import { FaHtml5, FaReact, FaCss3, FaJs, FaFigma } from "react-icons/fa6";

const getRandomPosition = () => {
  const positionX = Math.random() * 80; // 0 ile 80 arasında rastgele bir x konumu
  const positionY = Math.random() * 80; // 0 ile 80 arasında rastgele bir y konumu
  return {
    left: `${positionX}%`,
    top: `${positionY}%`
  };
};

const getRandomAnimation = () => {
  const duration = Math.random() * 5 + 3; // Rastgele 3 ile 8 saniye arasında bir süre
  return {
    animation: `floatAnimation ${duration}s infinite alternate`
  };
};

const AboutMe = () => {
  return (
    <div className='aboutme-container'>
      <div className='aboutme-who'>
        <div className='aboutme-who-text'>
          <h1>Who am I?</h1>
          <p>I am an enthusiastic frontend web application developer with a strong passion for crafting engaging and user-friendly digital experiences. Currently, I am pursuing my studies at Yildiz Technical University, where I am honing my skills and expanding my knowledge in web development. I thrive on tackling new challenges and staying updated with the latest trends and technologies in the field. My goal is to leverage my expertise to create innovative and impactful solutions that delight users and exceed expectations.</p>
        </div>
        <div className='aboutme-who-back-icons'>
          <FaHtml5 className='icon' style={{ ...getRandomPosition(), ...getRandomAnimation() }} />
          <FaReact className='icon' style={{ ...getRandomPosition(), ...getRandomAnimation() }} />
          <FaCss3 className='icon' style={{ ...getRandomPosition(), ...getRandomAnimation() }} />
          <FaJs className='icon' style={{ ...getRandomPosition(), ...getRandomAnimation() }} />
          <FaFigma className='icon' style={{ ...getRandomPosition(), ...getRandomAnimation() }} />
        </div>
      </div>

      <div className='aboutme-experience'>
        {/* Experience content */}
      </div>

      <div className='aboutme-education'>
        {/* Education content */}
      </div>
    </div>
  );
}

export default AboutMe;
