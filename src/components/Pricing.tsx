import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['Up to 5 projects', 'Basic analytics', 'Community support', '1GB storage']
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '10GB storage']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Custom solutions', 'Dedicated support', 'SLA guarantee', 'Unlimited storage']
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-indigo-600 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-indigo-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}