import React from 'react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="min-h-screen bg-black pt-24 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about our events or interested in collaborating? 
            We'd love to hear from you!
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}