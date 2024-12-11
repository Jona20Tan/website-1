import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="block">
      <img src="/air-logo.png" alt="Air Logo" className="w-16 h-11" />
    </Link>
  );
}