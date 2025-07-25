import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Skills from "@/app/skills/page";
import React from "react";
import Projects from "@/app/projects/page"; 
import Services from "@/app/services/page";


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
