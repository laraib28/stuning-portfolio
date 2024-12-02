import React from 'react';
import Hero from '../hero/hero';
import About from '../about/about';
import Services from '../services/services';
import Project from '../project/project';
import Skills from '../skills/skills';
// import Blog from '../blog/blog';
import Contact from '../contact/contact'


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services/>
      <Project/>
      <Skills/>
      {/* <Blog/> */}
      <Contact/>
    </div>
  );
};

export default Home;
