import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

function Contact() {
  const contactLinks = [
    { 
      name: "Email", 
      value: "mdzaidv574@gmail.com", 
      icon: <FaEnvelope />, 
      link: "mailto:mdzaidv574@gmail.com" 
    },
    { 
      name: "LinkedIn", 
      value: "mohamed-zaid-v-s", 
      icon: <FaLinkedin />, 
      link: "https://linkedin.com/in/mohamed-zaid-v-s-014931391" 
    },
    { 
      name: "GitHub", 
      value: "Md-zaidvs1", 
      icon: <FaGithub />, 
      link: "https://github.com/Md-zaidvs1" 
    },
    { 
      name: "Phone", 
      value: "7418773765", 
      icon: <FaPhone />, 
      link: "tel:7418773765" 
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-widest">Get In Touch</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Currently seeking onsite opportunities in Bangalore. Whether you have a question or just want to connect, my inbox is always open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 hover:border-emerald-500 transition-all duration-300 group shadow-lg"
            >
              <div className="text-3xl mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold mb-1 uppercase text-gray-300">{item.name}</h3>
              <p className="text-gray-500 text-xs break-all">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
      
      <footer className="mt-20 py-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <p>© 2026 Mohamed Zaid. Built with React & Tailwind CSS.</p>
      </footer>
    </section>
  );
}

export default Contact;