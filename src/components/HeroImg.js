import React from "react";
import Navbar from "../components/Navbar";
// import IntroImg from ;
import Hero_BG_Img from "../assests/bg_hero_style.jpg";

import "./heroImgStyle2.css";
const HeroImg = ({ heading, text }) => {
    return (
      <div className="hero-img">
        <img className="Hero_BG_Img" src={Hero_BG_Img} alt="backgroung-image" />
        <div className="heading">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  };

export default HeroImg;
