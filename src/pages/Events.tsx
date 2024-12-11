import React from 'react';
import { EventCard } from '../components/EventCard';

export function Events() {
  return (
    <main className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div>
            <EventCard
              title="Air X Fleawhere @ Suntec"
              image="/airpark-fleawhere.jpg"
              status="upcoming"
              date="18 January - 23rd February 2025"
              link="kongqi.com/airpark/events"
            />
          </div>
          <div>
            <EventCard
              title="Bouncing in 2025"
              image="/sg60-event.jpg"
              status="coming soon"
            />
          </div>
        </div>
      </div>
    </main>
  );
}