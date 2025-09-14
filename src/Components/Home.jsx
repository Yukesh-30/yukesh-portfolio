import React from 'react'
import Background from './Background'
import GlassyNavbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function Home() {
  return (
    <>
    <Background isDark={false}/>
    <GlassyNavbar isDark={false}/>
    <Hero/>
    <Skills/>
    <Projects/>
    
    </>
  )
}

export default Home