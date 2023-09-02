// import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../index.css";
import { FaBars ,FaTimes } from "react-icons/fa";
import React from "react";
import { useState } from "react";


const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    // Link different pages
    <div className="header">
      <Link to="/">
        <h1 className="text-3xl font-bold"> Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" :"nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <div className="hambuger"  onClick={handleClick}>
        {click ?( <FaTimes size={20} style={{color:"#fff"}} onClick={handleClick}/>) :(<FaBars size={20} style={{color:"#fff"}}/>)
        }
        </div>
        
      {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button> */}
    </div>
  );
};

export default Navbar;
