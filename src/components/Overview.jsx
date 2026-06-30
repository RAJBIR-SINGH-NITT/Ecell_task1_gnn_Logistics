import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Overview = () => {
  return (
    <section id="overview" className="scroll-mt-20 py-24 bg-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-3">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Company Overview</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              At GNN Logistics Inc., our mission is to streamline global trade by providing innovative, reliable, and transparent freight solutions. We believe logistics shouldn't be a hurdle, but a competitive advantage for your business.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded on principles of integrity and speed, we leverage modern technology to track, manage, and optimize your supply chain from origin to destination.
            </p>
          </div>

          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent">
            <h3 className="text-xl font-semibold mb-4 text-primary">Why Choose Us?</h3>
            <ul className="space-y-4 text-gray-700">
              {[
                '99.8% On-Time Delivery Rate',
                '24/7 Real-time Shipment Tracking',
                'Global Network of Partners',
                'Dedicated Account Managers',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;