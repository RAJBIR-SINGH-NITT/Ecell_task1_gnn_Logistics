import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('All fields are required.');
      return;
    }

    setStatus('loading');

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxU6QeflMNeBe1orbbz7TSsKzTLkuFshqeMSmGDVBU2OQL5y3XAd3dHpu5v86x1Sz2C/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 py-24 bg-gradient-to-br from-primary via-primary-light to-primary text-white overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent-light rounded-full text-sm font-semibold mb-3">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Fill out the form below to request a quote or ask a question. Our team will get back to you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-gray-900"
        >
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition bg-soft"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition bg-soft"
              placeholder="john@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition resize-none bg-soft"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full font-semibold py-3.5 px-4 rounded-lg transition duration-200 shadow-md ${
              status === 'loading'
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-accent hover:bg-accent-hover text-white hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center font-medium">
              ✅ Message sent successfully! We'll be in touch soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center font-medium">
              ⚠️ {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;