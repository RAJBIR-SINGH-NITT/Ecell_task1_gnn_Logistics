import React from 'react';
import { FiLinkedin, FiTwitter, FiFacebook, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-extrabold text-lg">G</span>
              </div>
              <span className="font-bold text-xl text-white">
                GNN <span className="text-accent">Logistics</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Delivering secure, scalable, and lightning-fast global supply chain solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-accent transition">Home</a></li>
              <li><a href="#overview" className="hover:text-accent transition">About</a></li>
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FiMapPin className="text-accent mt-0.5 flex-shrink-0" />
                <span>123 Freight Way, Transport City, TC 90210</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-accent flex-shrink-0" />
                <span>contact@gnnlogistics.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-accent flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} GNN Logistics Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-accent text-white rounded-full flex items-center justify-center transition">
              <FiLinkedin size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-accent text-white rounded-full flex items-center justify-center transition">
              <FiTwitter size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-accent text-white rounded-full flex items-center justify-center transition">
              <FiFacebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;