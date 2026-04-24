import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNetlify, SiRender, SiPostman } from 'react-icons/si';

function Skills() {
  const skillSets = [
    {
      category: "Frontend",
      list: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5 & CSS3", icon: <FaHtml5 /> },
      ]
    },
    {
      category: "Backend & Database",
      list: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "RESTful APIs", icon: <SiPostman /> },
      ]
    },
    {
      category: "Tools & Deployment",
      list: [
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Render", icon: <SiRender /> },
        { name: "VS Code", icon: <span className="font-bold">VS</span> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-widest">Technical Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillSets.map((set, index) => (
            <div key={index} className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500 transition-all duration-300 group shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-emerald-500 border-b border-zinc-800 pb-2 italic text-center">
                {set.category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {set.list.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-default">
                    <div className="text-4xl mb-2 text-zinc-500 group-hover:text-emerald-500 transition-colors duration-300 transform group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-tighter group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;