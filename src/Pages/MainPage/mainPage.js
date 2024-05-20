import React from "react";
import "./mainPage.css";
import emre from "../../Images/emre.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <div className="mainpage-flexbox">
        <div className="mainpage-text">
          <div className="mainpage-title">
            <h1>Hi, I'm Emre Uslu!</h1>
          </div>
          <div className="mainpage-desc">
            <p>Junior Frontend Developer.</p>
          </div>
          <div className="mainpage-socials">
            <a href="https://linkedin.com/in/mreuslu" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rakun256/" target="_blank" rel="noopener noreferrer">
              <FaSquareGithub />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=emreuslu256@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaRegEnvelope />
            </a>
          </div>
        </div>
        <div className="mainpage-photo">
          <img src={emre} alt="emre" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
