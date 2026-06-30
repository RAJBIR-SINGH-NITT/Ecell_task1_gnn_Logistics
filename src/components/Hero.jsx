import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 pt-32 pb-32 flex items-center justify-center min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary text-white px-4 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-accent-light backdrop-blur-sm"
        >
          🚚 Trusted by 500+ businesses worldwide
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Delivering Your World, <br />
          <span className="text-accent">On Time.</span>
        </h1>

        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          GNN Logistics Inc. offers secure, scalable, and lightning-fast global supply chain solutions tailored to your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white/40 hover:border-white hover:bg-white hover:text-primary text-white font-semibold py-3.5 px-8 rounded-lg transition duration-200"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-sm text-gray-400 mt-1">Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">50+</div>
            <div className="text-sm text-gray-400 mt-1">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">99.9%</div>
            <div className="text-sm text-gray-400 mt-1">On-time Delivery</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;