import React, { useEffect, useState } from "react";


// To DO : use that typing effect in this 
const TextRotator = () => {
  const texts = [
    "I am a Web Developer",
    "I am a Pro Coder",
    "I am a DSA Enthusiast",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="animate__animated animate__fadeIn animate__delay-0.9s text-5xl font-bold">
      {texts[currentIndex]}
    </h1>
  );
};

export default TextRotator;
