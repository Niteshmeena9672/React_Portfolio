import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading = "ABOUT" text="I am a Full Stack Web Developer"/>
    </div>
  )
}

export default About