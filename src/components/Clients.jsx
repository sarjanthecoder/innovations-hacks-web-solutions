import React from 'react';

const Clients = () => {
  const clients = [
    { name: "Propcare NW", url: "https://propcarenw.uk" },
    { name: "Velgo", url: "https://www.velgo.in" },
    { name: "Sarjan P", url: "https://www.sarjanp.in" },
    { name: "Karthick Site", url: "https://www.karthick.site" },
    { name: "Lokesh Loki", url: "https://www.lokeshloki.in" },
    { name: "Nishanth K", url: "https://www.nishanthk.site" }
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-navy-950/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-6">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest">
          Trusted By Growing Businesses Worldwide
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030914] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030914] to-transparent z-10 pointer-events-none"></div>
        
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center">
          {/* Double the array for seamless infinite scroll */}
          {[...clients, ...clients].map((client, index) => (
            <a 
              key={index} 
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-12 text-2xl font-extrabold tracking-wide text-white/20 hover:text-cyan-neon hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300"
            >
              {client.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;