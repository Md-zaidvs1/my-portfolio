import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-black/90 backdrop-blur-sm z-50 border-b border-zinc-900">
      <div className="flex justify-between items-center w-full h-full px-6 md:px-20">
        <div>
          <h1 className="text-xl font-bold tracking-tighter text-white">
            My <span className="text-emerald-500">Portfolio</span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-sm font-medium text-gray-400 hover:text-emerald-500 transition-colors uppercase tracking-widest"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="md:hidden z-50 text-white cursor-pointer">
          {!nav ? <HiMenuAlt3 size={30} /> : <HiX size={30} />}
        </div>

        <ul
          className={`${
            !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'
          }`}
        >
          {navLinks.map((item, index) => (
            <li key={index} className="py-6 text-2xl">
              <a
                onClick={() => setNav(!nav)}
                href={item.link}
                className="text-gray-400 hover:text-emerald-500 uppercase tracking-widest"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;