import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center justify-center">
      <a href="#" className="text-white hover:text-gray-300">
        <Instagram className="h-6 w-6" />
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <Facebook className="h-6 w-6" />
      </a>
    </div>
  );
}