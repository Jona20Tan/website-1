import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center space-x-8">
          <Link to="/about" className="text-subtitle text-white hover:text-gray-300">
            About Air
          </Link>
          <Link to="/events" className="text-subtitle text-white hover:text-gray-300">
            Events
          </Link>
          <Link to="/contact" className="text-subtitle text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}