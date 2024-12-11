import React from 'react';

export function About() {
  return (
    <div className="min-h-screen bg-black pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-white mb-4">
              AIR stands for Adventure, Imagination, and Recreation.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We are a brand committed to creating vibrant, immersive experiences that inspire joy, spark creativity, and bring people together.
            </p>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-pink-500 via-blue-500 to-green-500 rounded-3xl p-8">
              <img 
                src="/Castle.png" 
                alt="Air Castle"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-24">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto text-center">
            Whether at festivals, corporate events, or community gatherings, Air transforms spaces into hubs of unforgettable fun and connection, embodying the spirit of adventure and innovation.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: "/adventure.png",
              title: "Adventure",
              description: "Adventure is about inspiring people to embrace curiosity, break free from routine, and discover extraordinary moments in everyday life",
              bgColor: "bg-sky-400"
            },
            {
              icon: "/imagination.png",
              title: "Imagination",
              description: "Imagination fuels the creativity to see the world differently, turning simple ideas into powerful experiences that connect and inspire.",
              bgColor: "bg-yellow-400"
            },
            {
              icon: "/recreation.png",
              title: "Recreation",
              description: "Recreation focuses on creating spaces for renewal and connection, reminding us of the joy in shared moments and meaningful interactions.",
              bgColor: "bg-green-400"
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className={`${value.bgColor} rounded-3xl p-8 text-black transition-transform hover:scale-105`}
            >
              <div className="bg-black/10 w-32 h-32 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <img src={value.icon} alt={value.title} className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{value.title}</h3>
              <p className="text-black/80 leading-relaxed text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}