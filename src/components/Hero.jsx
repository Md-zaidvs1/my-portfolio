import React from 'react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-white bg-black">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-emerald-500">Mohamed Zaid</span>
        </h1>
        
        <p className="mt-6 text-gray-300 text-lg md:text-xl font-medium">
          IIT-M Pravartak Certified <span className="text-emerald-400">MERN Stack Developer</span>
        </p>
        
        <p className="mt-4 text-gray-400">
          Transforming complex logic into scalable web solutions. Currently mastering high-performance architecture through 250+ CodeKata challenges.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-emerald-600 rounded-lg font-bold text-center hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
          >
            View Projects
          </a>
          <a 
            href="/Mohamed_Zaid_Resume.pdf" 
            download
            className="px-8 py-3 border border-gray-800 rounded-lg font-bold text-center hover:bg-white hover:text-black transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-25"></div>
          <img
            src="/profile.png"
            alt="Mohamed Zaid"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-emerald-500 shadow-2xl transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;