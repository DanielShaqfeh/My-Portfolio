import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram,FaRegSmile} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="flex flex-col w-fit">
      <div className="flex flex-col">
        <p className="text-teal-300 mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tigh text-slate-200 mb-2">
          Daniel Shaqfeh.
        </h1>
        <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-4">
            Full Stack Developer
        </h2>
        <p className="text-2xl text-slate-400 leading-tight">
            I Learn and Build <FaRegSmile className="inline  text-3xl text-teal-300 animate-bounce mt-2 md:mt-0" />{' '}
            <span className="font-semibold text-teal-300">Software</span>.
        </p>

        <div className="hidden md:block font-mono text-sm text-teal-300 mt-15 w-fit space-y-6">
          <Navbar />
        </div>

        <div className="flex space-x-6 text-slate-500 text-3xl mt-10 md:mt-40 md:pb-5">
          <a
            href="https://github.com/DanielShaqfeh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-shaqfeh-8021a8253"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/danie1_ss/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <FaInstagram />
          </a>
          <a
            href="https://leetcode.com/u/Shaqfe_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
