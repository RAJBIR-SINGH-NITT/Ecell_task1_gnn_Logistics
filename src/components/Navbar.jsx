import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#overview' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 top-0 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-extrabold text-lg">G</span>
            </div>
            <span className="font-bold text-xl text-primary tracking-tight">
              GNN <span className="text-accent">Logistics</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-700 hover:text-accent font-medium transition-colors duration-200 group py-2"
              >
                {link.name}
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Get Quote
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-primary focus:outline-none" aria-label="Toggle menu">
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-soft hover:text-accent font-medium transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-semibold text-center mt-2"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;