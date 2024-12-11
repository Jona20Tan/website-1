import React from 'react';

interface EventCardProps {
  title: string;
  image: string;
  status: 'upcoming' | 'coming soon';
  date?: string;
  link?: string;
}

export function EventCard({ title, image, status, date, link }: EventCardProps) {
  return (
    <div className="group">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <span className={`
            px-4 py-1 rounded-full text-body font-bold
            ${status === 'upcoming' ? 'bg-[#51FF00] text-black' : 'bg-[#FFD600] text-black'}
          `}>
            {status === 'upcoming' ? 'UPCOMING' : 'COMING SOON'}
          </span>
        </div>

        <div className="overflow-hidden rounded-3xl mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full aspect-[4/3] object-cover transform transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <h3 className="text-title text-white mb-2 text-center">{title}</h3>
      {date && <p className="text-body-large text-white/80 text-center">{date}</p>}
      {link && (
        <div className="text-center">
          <a 
            href={`https://${link}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-body-large text-white/80 hover:text-white inline-block mt-2"
          >
            Learn more →
          </a>
        </div>
      )}
    </div>
  );
}