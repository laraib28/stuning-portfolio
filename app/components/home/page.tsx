import About from "../../about/page";
import Contact from "../../contact/page";
import Skills from "../../skills/page";
import React from "react";
import Projects from "../../projects/page"; 
import Services from "../../services/page";


const home = () => {
  return (
    <div>home
        <Contact/>
        <About/>
        <Skills/>
        <Projects/>
        <Services/>
    </div>
  )
}

export default home
