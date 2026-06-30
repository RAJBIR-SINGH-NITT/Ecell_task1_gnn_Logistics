import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    client: 'Sarah Jenkins',
    company: 'TechCorp',
    text: 'GNN completely overhauled our supply chain. Their tracking system is top tier.',
  },
  {
    id: 2,
    client: 'Marcus Vance',
    company: 'Vance Retail',
    text: "Reliable, fast, and great customer service. Haven't lost a single package since switching.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-soft">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Client Reviews</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              <FaQuoteLeft className="text-accent/30 absolute top-6 right-6" size={40} />
              <p className="text-gray-700 leading-relaxed mb-6 italic text-lg relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-primary text-accent rounded-full flex items-center justify-center font-bold text-lg">
                  {review.client.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-primary">{review.client}</div>
                  <div className="text-sm text-gray-500">{review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;