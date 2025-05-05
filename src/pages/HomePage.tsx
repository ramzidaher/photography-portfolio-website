import React from 'react';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';

export const HomePage = () => {
  const featuredImages = [{
    src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448410/DSC00708_1_g4qxjj.jpg?q=80&w=1000&auto=format&fit=crop',
    alt: 'Seagul with the sunset'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369168/ShotsByRamzi-5_lfe3jt.jpg',
    alt: 'Person with a kufeya'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448393/DSC06254_1_sycceb.jpg?q=80&w=1000&auto=format&fit=crop',
    alt: 'Family'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369139/DSC00014_rr04mh.jpg',
    alt: 'Jordan Ruins'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369137/DSC07667_1_zphv7r.jpg',
    alt: 'Women and a seagull'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369138/DSC08278_1_b2xbvt.jpg',
    alt: 'Snow'
  }];
  
  return (
    <div className="w-full bg-black min-h-screen">
      <Hero />
      <section className="py-32">
        <div className="container mx-auto px-6 mb-16">
          <h2 className="text-3xl text-white font-light mb-4 tracking-wide">
            Featured Work
          </h2>
          <p className="text-white/60 max-w-2xl font-light">
            A selection of graduation photographs captured at Brighton's most
            iconic locations.
          </p>
        </div>
        <Gallery images={featuredImages} />
      </section>
    </div>
  );
};
