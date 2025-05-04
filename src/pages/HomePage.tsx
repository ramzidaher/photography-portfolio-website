import React from 'react';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';

export const HomePage = () => {
  const featuredImages = [{
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369168/DSC09997_e1hq5f.jpg',
    alt: 'Graduate portrait'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369168/ShotsByRamzi-5_lfe3jt.jpg',
    alt: 'Graduation ceremony'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369146/DSC07654_3_cobadh.jpg',
    alt: 'Graduate celebration'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369139/DSC00014_rr04mh.jpg',
    alt: 'Group photo'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369137/DSC07667_1_zphv7r.jpg',
    alt: 'Seaside portrait'
  }, {
    src: 'https://res.cloudinary.com/druct3maa/image/upload/f_auto,q_auto:best,w_1000/v1746369138/DSC08278_1_b2xbvt.jpg',
    alt: 'Graduation moment'
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
