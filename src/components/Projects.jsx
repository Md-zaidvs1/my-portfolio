import React from 'react';

function Projects() {
  const projectData = [
    {
      title: "SpendSense - Finance Manager",
      description: "Full-stack MERN application for managing personal cash flow and expenses with secure backend integration.",
      tech: "MERN Stack",
      live: "https://symphonious-biscuit-b8266c.netlify.app/", 
      github: "https://github.com/Md-zaidvs1/Finance-project-frontend-1"
    },
    {
      title: "Professional Invoice Builder",
      description: "React application for generating and managing business invoices with dynamic UI components.",
      tech: "React • Tailwind",
      live: "https://heroic-rabanadas-d8a1e5.netlify.app/",
      github: "https://github.com/Md-zaidvs1/Invoice-Builder"
    },
    {
      title: "iMovie Review App",
      description: "Movie database application using external API integration and responsive component architecture.",
      tech: "React • API",
      live: "https://m-review-app.netlify.app",
      github: "https://github.com/Md-zaidvs1/imovie-re-app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-widest">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between shadow-2xl">
              <div>
                <h3 className="text-xl font-bold mb-3 text-emerald-500">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="text-[10px] font-mono text-emerald-400 mb-6 bg-emerald-900/10 border border-emerald-900/30 px-2 py-1 rounded inline-block uppercase">
                  {project.tech}
                </div>
              </div>
              <div className="flex gap-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 py-2 rounded-lg text-xs font-bold uppercase transition">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-zinc-700 hover:bg-white hover:text-black py-2 rounded-lg text-xs font-bold uppercase transition">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;