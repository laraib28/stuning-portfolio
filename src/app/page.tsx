import React from 'react'
import About from './about/page'
import Hero from './components/home/hero/page'
import Project from './projects/page'
import Contact from './contact/page'
import Services from './services/page'
import Skills from './skills/page'
import Home from './components/home/navbar/home'

const HomePage = () => {
  return (
    <div>
      <Home/>
      <Hero />
      <About />
      <Services/>
      <Project/>
      <Skills/>
      {/* <Blog/> */}
      <Contact/>
    </div>
  )
}

export default HomePage
