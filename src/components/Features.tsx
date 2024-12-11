import React from 'react';
import { Zap, Shield, Code, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Lightning Fast',
    description: 'Built for speed and performance, ensuring your applications run smoothly.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure by Default',
    description: 'Enterprise-grade security features built into every component.'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Developer Friendly',
    description: 'Clean, well-documented code that makes development a breeze.'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Easy Deployment',
    description: 'Deploy to production with confidence using our automated tools.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you build modern web applications faster.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}