import React from 'react';

function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-widest">
          About <span className="text-emerald-500">Me</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          I am a fresher frontend developer passionate about building responsive and user-friendly web applications using React and modern JavaScript frameworks. I enjoy turning ideas into real projects and am actively looking for opportunities to grow.
        </p>
      </div>
    </section>
  );
}

export default About;