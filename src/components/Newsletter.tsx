import React from 'react';

export function Newsletter() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-title text-white mb-4 text-center">JOIN OUR MAILING LIST</h3>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter email address"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800/50 text-body text-white border border-gray-700 focus:outline-none focus:border-white"
        />
        <button className="px-6 py-2 bg-[#51FF00] text-black text-body font-bold rounded-lg hover:bg-[#45DB00] transition-colors">
          JOIN
        </button>
      </div>
    </div>
  );
}