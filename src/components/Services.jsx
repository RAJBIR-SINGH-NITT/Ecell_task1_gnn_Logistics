import React from 'react';
import { FiTruck, FiGlobe, FiPackage } from 'react-icons/fi';

const servicesList = [
  {
    id: 1,
    title: 'Ground Freight',
    description: 'Cost-effective and reliable overland transport for regional deliveries.',
    icon: <FiTruck size={32} />,
  },
  {
    id: 2,
    title: 'Global Air Cargo',
    description: 'Expedited shipping solutions for time-sensitive international shipments.',
    icon: <FiGlobe size={32} />,
  },
  {
    id: 3,
    title: 'Warehousing',
    description: 'Secure, climate-controlled storage facilities with inventory management.',
    icon: <FiPackage size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-20 py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-3">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Our Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group bg-soft p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="mb-6 bg-primary w-16 h-16 flex items-center justify-center rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;