import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-gray-900 min-h-screen font-sans selection:bg-blue-500/30'>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 bg-gray-900 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2026 Mohamed Zaid. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;