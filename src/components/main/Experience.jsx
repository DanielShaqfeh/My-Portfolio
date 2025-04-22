import React from 'react';

function Experience() {
  return (
    <>
        {/* Experience */}
        <div className="flex flex-col">
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-slate-200 mb-6 border-b-4 border-slate-700 pb-2">Experience</h2>
                <div className="p-4 border border-slate-700 rounded-2xl bg-slate-800 shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-teal-300">
                    Full Stack Developer Intern <span className="text-slate-400 font-normal">@ Vardot</span>
                  </h3>
                  <p className="text-sm text-slate-500 mb-3 mt-1">Jun 2024 – Sep 2024</p>
                  <ul className="list-disc list-inside text-slate-400 text-base leading-relaxed space-y-2 pl-2">
                    <li>
                      Contributed to both front-end and back-end development using <span className="text-teal-300 font-medium">PHP</span>, <span className="text-teal-300 font-medium">MySQL</span>, and <span className="text-teal-300 font-medium">Bootstrap</span> for responsive design.
                    </li>
                    <li>
                      Built a strong foundation in <span className="text-teal-300 font-medium">Drupal</span>, focusing on custom module development and scalable content architecture.
                    </li>
                    <li>
                      Worked closely with senior engineers to debug, optimize, and ship performant features, improving both UI consistency and backend stability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    </>
  );
}

export default Experience;
