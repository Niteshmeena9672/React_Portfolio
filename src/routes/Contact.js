import React from 'react'
import "../index.css"
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading = "CONTACT" text="Let's Connect"/>
    </div>
  )
}

export default Contact