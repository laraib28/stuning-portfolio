"use client"
import Nav from './nav'
import Mobilenav from './mobile'
import React ,{ useState } from 'react'

const ResponsiveNav =() => {
  const [showNav, setShowNav] = useState(false);
  
  const showNavHandler = () => setShowNav (true);
  const closeNavHandler = () => setShowNav(false)
  return (
    <div>
      <Nav openNav={showNavHandler}/>
      <Mobilenav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav
