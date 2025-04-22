// src/components/AboutMe.js
import React from 'react';

function AboutMe() {
  return (
    <>
        {/* About Me */}
        <div className='flex flex-col gap-y-4'>
            <h2 className="text-3xl font-bold text-slate-200 border-b-4 border-slate-700 pb-2">About Me</h2>
            <p className="text-xl text-slate-400">
                I'm a <span className="text-white">computer science student</span> who's always been curious about how things work—and even more curious about how to make them better. 
                I don't just enjoy writing code—I genuinely enjoy <span className="text-white">solving problems</span>. Whether it's fixing a bug, building something from scratch, 
                or finding a smarter way to approach a challenge, I love the whole process of thinking it through and bringing ideas to life.
            </p>
            <p className="text-xl text-slate-400">
                Over the past few years, I've gotten really into <span className="text-white">competitive programming</span>. 
                I've joined quite a few contests, and each one has pushed me to improve my <span className="text-white">problem-solving</span>, 
                <span className="text-white">teamwork</span>, and <span className="text-white">patience</span>.
            </p>
            <p className="text-xl text-slate-400">
                Outside of that, I've also helped out at programming events—mostly supporting and encouraging others who are just getting started. 
                At the end of the day, I'm always trying to <span className="text-white">learn</span>, grow, and make a positive impact through what I build or contribute to.
            </p>
            <p className="text-xl text-slate-400">
                In my spare time, I love staying active—mostly playing <span className="text-white">volleyball</span>, which is definitely my favorite. 
                It's a great way to clear my head and have fun. I'm also a big fan of movie or anime nights (especially with some good food), 
                as they're one of my favorite ways to relax and dive into a different world.
            </p>
        </div>
    </>
  );
}

export default AboutMe;
