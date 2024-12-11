import React from 'react';
import { Link } from 'react-router-dom';
import { EventCard } from '../components/EventCard';
import { Newsletter } from '../components/Newsletter';

export function Home() {
  return (
    <main className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <EventCard
            title="Air presents AIRPARK"
            image="/airpark-event.jpg"
            status="upcoming"
          />
          <EventCard
            title="Air X Fleawhere @ Suntec"
            image="/airpark-fleawhere.jpg"
            status="upcoming"
            date="18 January - 23rd February 2025"
            link="kongqi.com/airpark/events"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-white text-2xl leading-relaxed">
            Air creates unforgettable experiences by transforming
            spaces into hubs of joy, creativity, and connection,
            delivering moments that inspire and unite.
          </p>
          <Link to="/about">
            <button className="mt-8 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              READ MORE
            </button>
          </Link>
        </div>

        <div className="mb-20">
          <Newsletter />
        </div>
      </div>
    </main>
  );
}