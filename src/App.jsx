import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

// Components
import Hero from './components/Hero';
import AboutMe from './components/main/AboutMe';
import Experience from './components/main/Experience';
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';
import Footer from './components/main/Footer';

function App() {
  return (
    <div className="flex flex-col mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-30 ">
        {/* Sticky Left */}
        <div className="lg:sticky top-20 h-fit self-start  ml-5 lg:ml-auto mr-5 lg:mr-40 md:pl-15">
          <Hero />
        </div>
          
        {/*Right Column*/}
        <div className="flex flex-col ml-5 lg:ml-auto mr-5 lg:mr-30">
          <div className="flex flex-col gap-y-20"> 
            {/* About Me */}
            <section id="about">
              <AboutMe />
            </section>
            {/* Experience */}
            <section id="experience">
              <Experience />
            </section>
            {/* Projects */}
            <section id="projects">
              <Projects />
            </section>
            {/* Contact */}
            <section id="contact">
              <Contact />
            </section>
            {/* Footer */}
            <Footer />
          </div>
        </div>

        </div>
       
        
    </div>
  );
}

export default App;
