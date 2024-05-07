import React from 'react'
import './mainPage.css'
import emre from '../../Images/emre.jpg'
import "@fortawesome/fontawesome-free/css/all.min.css";

const MainPage = () => {
  return (
    <div className='mainpage-container'>
      <div className='mainpage-flexbox'>
      <div className='mainpage-text'>
      <div className='mainpage-title'>
          <h1>Hi, I'm Emre Uslu!</h1>
        </div>
        <div className='mainpage-desc'>
          <p>I'm an enthusiastic frontend web application developer with a strong passion for crafting engaging and user-friendly digital experiences. Currently, I am pursuing my studies at Yildiz Technical University, where I am honing my skills and expanding my knowledge in web development.</p>
        </div>
      </div>
        <div className='mainpage-photo'>
          <img src={emre} alt='emre'/>
        </div>
      </div>
      
        <div className='mainpage-socials'>
            
        </div>
    </div>
  )
}

export default MainPage