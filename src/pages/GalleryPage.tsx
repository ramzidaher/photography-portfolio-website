import React, { useState, memo } from 'react';
import { Gallery } from '../components/Gallery';

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [{
    id: 'all',
    name: 'All Photos'
  }, {
    id: 'individual',
    name: 'Individual'
  }, {
    id: 'groups',
    name: 'Group Photos'
  }, {
    id: 'seafront',
    name: 'Seafront'
  }, {
    id: 'pier',
    name: 'Brighton Pier'
  }, {
    id: 'video',
    name: 'Video Thumbnails'
  }];

  const galleryImages = [{
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduate tossing cap',
    category: 'individual'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduate at seafront',
    category: 'seafront'
  }, {
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduate celebrating',
    category: 'individual'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704374-f1f3f8d3eb49?q=80&w=1000&auto=format&fit=crop',
    alt: 'Group of graduates',
    category: 'groups'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704243-5f0771d90783?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduate portrait',
    category: 'individual'
  }, {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduation ceremony',
    category: 'groups'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1000&auto=format&fit=crop',
    alt: 'Brighton Pier graduation',
    category: 'pier'
  }, {
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graduate at sunset',
    category: 'seafront'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704374-f1f3f8d3eb49?q=80&w=1000&auto=format&fit=crop',
    alt: 'Video thumbnail',
    category: 'video'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704243-5f0771d90783?q=80&w=1000&auto=format&fit=crop',
    alt: 'Brighton beach graduation',
    category: 'seafront'
  }, {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    alt: 'Group celebration',
    category: 'groups'
  }, {
    src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1000&auto=format&fit=crop',
    alt: 'Video highlight',
    category: 'video'
  }];
  
  const filteredImages = activeCategory === 'all' ? galleryImages : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-black pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Browse through our collection of graduation photos at Brighton's
            most iconic locations.
          </p>
        </div>
      </div>

      {/* Gallery Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`
                  px-4 py-2 rounded-md transition-colors
                  ${activeCategory === category.id ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}
                `}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Gallery images={filteredImages} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your own graduation photoshoot at Brighton Seafront and create
            memories that will last a lifetime.
          </p>
          <a href="/contact" className="bg-white text-black hover:bg-gray-100 py-3 px-8 rounded-md font-medium text-lg inline-block transition-colors">
            Book Your Session Now
          </a>
        </div>
      </section>
    </div>
  );
};
