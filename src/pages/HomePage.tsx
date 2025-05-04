import React from 'react';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';
export const HomePage = () => {
  const featuredImages = [{
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduate portrait'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduation ceremony'
  }, {
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduate celebration'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704374-f1f3f8d3eb49?q=80&w=1000&auto=format&fit=crop',
    alt: 'Group photo'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704243-5f0771d90783?q=80&w=1000&auto=format&fit=crop',
    alt: 'Seaside portrait'
  }, {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduation moment'
  }];
  return <div className="w-full bg-black min-h-screen">
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
</div>;

};