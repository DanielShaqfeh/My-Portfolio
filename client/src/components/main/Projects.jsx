// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <>
        {/* Projects */}
        <div className="flex flex-col gap-y-6">
              <h2 className="text-3xl font-bold text-slate-200 border-b-4 border-slate-700 pb-2">Projects</h2>
              {/* React Form Project */}
              <div className="p-4 border border-slate-700 rounded-2xl bg-slate-800 shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-teal-300">React Form Project</h3>
                <p className="text-sm text-slate-500 mb-2">A simple React form that collects user information and logs it to the console.</p>
                <p className="text-slate-400 text-base mb-3">
                  This project demonstrates the use of React components, hooks, and props to handle user inputs. The form data is collected and logged using React Hooks (`useState`, `useRef`).
                </p>
                {/* Technologies Used*/}
                <div className="mb-3">
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-sm border border-teal-800">React</span>
                  <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-sm border border-teal-800">Tailwind CSS</span>
                  <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-sm border border-teal-800">React Hooks (useState, useRef)</span>
                  <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-sm border border-teal-800">React Components</span>
                  <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-sm border border-teal-800">Props</span>
                </div>
              </div>


                <a href="https://github.com/DanielShaqfeh/React-Form.git" className="text-teal-300 text-sm font-medium" target="_blank">View on GitHub</a>
              </div>

              {/* iTicket-App */}
              <div className="p-4 border border-slate-700 rounded-2xl bg-slate-800 shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-teal-300">iTicket-App</h3>
                <p className="text-sm text-slate-500 mb-2">An Android app for efficient ticket management, developed in Kotlin.</p>
                <p className="text-slate-400 text-base mb-3">
                  iTicket-App allows users to create and assign tickets to employees. The app also provides detailed information about clients, employees, and all tickets created within the system.
                </p>
                {/* Technologies Used*/}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-sm border border-teal-800">Kotlin</span>
                    <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-sm border border-teal-800">Android SDK</span>
                    <span className="bg-teal-800 text-teal-200 py-1 px-3 rounded-full text-sm border border-teal-800">Firebase</span>
                  </div>
                </div>
                <a href="https://github.com/DanielShaqfeh/iTicket-app.git" className="text-teal-300 text-sm font-medium" target="_blank">View on GitHub</a>
              </div>
            </div>
    </>
  );
}

export default Projects;
