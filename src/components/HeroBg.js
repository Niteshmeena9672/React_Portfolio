import "./heroImgStyle.css";
import React from "react";
import IntroImg from "../assests/bg.jpg";
import { Link } from "react-router-dom";
const HeroBg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="backgroung-image" />
      </div>
      <div className="content">
        <p>
          Hi, I am <span className="text-3xl font-bold">Nitesh Meena</span>
        </p>
        <h1 className="text-5xl font-bold">I am a Web Developer</h1>
        <div>
          <Link to="/project">
            <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Project
            </button>
          </Link>
          {/* TODO : -> Add resume link not a contact */}
          <Link to="./Contact">
            <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
