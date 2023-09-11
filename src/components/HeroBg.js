import "./heroImgStyle.css";
import React from "react";
import "animate.css/animate.min.css";
import TextRotator from "./text";
import IntroImg from "../assests/bg.jpg";
import { Link } from "react-router-dom";
const HeroBg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="backgroung-image" />
      </div>

      <div className="content">
        <p className="animate__animated animate__fadeIn animate__delay-0.5s">
          Hi, I am <span className="text-3xl font-bold">Nitesh Meena</span>
        </p>
        <TextRotator />

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
