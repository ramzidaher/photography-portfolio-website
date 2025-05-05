import React, { useState, memo, useMemo } from 'react';
import { Gallery } from '../components/Gallery';

export const GalleryPage = memo(() => {
  const [activeCategory, setActiveCategory] = useState<'all' | string>('all');

  // Define filter buttons
  const categories = useMemo(
    () => [
      { id: 'all', name: 'All Photos' },
      { id: 'individual', name: 'Individual' },
      { id: 'groups', name: 'Group Photos' },
      { id: 'seafront', name: 'Seafront' },
      { id: 'pier', name: 'Brighton Pier' },
      { id: 'street', name: 'Street Photography' },
      { id: 'landscape', name: 'Landscape' },
    ],
    []
  );

  // Image data with categories as arrays
  const galleryImages = useMemo(
    () => [
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448425/DSC07607_1_onjoxv.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Brighton Seafront Pedal Board',
        categories: ['landscape'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448419/DSC02177_1_jriztj.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Heart Kissing',
        categories: ['street'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448419/DSC02297_1_o1skjd.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'old people on the marina',
        categories: ['street'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448419/DSC01775_1_vbztvc.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Couples on the pier',
        categories: ['groups', 'seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448418/DSC01917_1_gj7ft6.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Couples on the sunset',
        categories: ['seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448418/DSC00619_1_xp4ko0.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Group of friends on the seafront',
        categories: ['groups', 'seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448417/DSC03281_1_wubvu3.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Sail Boats Sunset',
        categories: ['seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448417/DSC03357_yhkf1u.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Pedal boat on the sea',
        categories: ['seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448416/DSC07694_1_jve5ip.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Woman with headphones on the seafront',
        categories: ['seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448412/DSC07866_1_byitqx.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Couples wearing hats under Christmas lights',
        categories: ['street', 'groups'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448411/DSC00618_1_toe7c1.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Seagull flying by the pier',
        categories: ['seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448410/DSC09968_lweins.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Man on the balcony in Jordan',
        categories: ['street'],
      },
      // Newly added images
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448410/DSC00708_1_g4qxjj.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Sun hotting the bird whel flying over the',
        categories: ['seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448410/DSC02544_kj4dmh.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Man with a tattoo on the seafront',
        categories: ['seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448409/DSC01892_1_snm1dn.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Dog walkign with owners and the sun hittin them from behind them',
        categories: ['groups', 'seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448408/DSC02271_ba8lju.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Girls standing undeneatht the bus stop',
        categories: ['individual', 'street'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448402/DSC00603_1_no0k70.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Couples kising in the seafront',
        categories: ['groups', 'seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448401/DSC01170_hgnodj.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Group of teenage friends in the trainsattion',
        categories: ['groups'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448403/DSC05897_nzfas2.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Dad kissing daughters forhead',
        categories: ['groups', 'individual'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448403/DSC00588_1_ncp52l.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Brighton pier games',
        categories: ['pier', 'seafront'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448403/DSC04523_ynhny1.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Groups of firends in brighton lanes',
        categories: ['groups', 'street'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448402/DSC06353_1_pqymf4.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'three people geomerty',
        categories: ['seafront', 'groups'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448395/DSC04806_1_obnt42.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Man doing yoga on the beach',
        categories: ['seafront', 'pier', 'individual'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448396/DSC07624_1_utipwd.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Brighton Pier under the sun',
        categories: ['seafront', 'landscape', 'pier'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448395/DSC02207_1_qnq6qp.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Man sitting on a bench',
        categories: ['street', 'individual'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448394/DSC06208_1_mhg7x5.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Man holding his kids hand on the Pier',
        categories: ['street', 'pier', 'groups'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448393/DSC08456_aoslqd.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Seagul in the snow',
        categories: ['street'],
      },
      {
        src: 'https://res.cloudinary.com/druct3maa/image/upload/v1746448393/DSC06254_1_sycceb.jpg?q=80&w=1000&auto=format&fit=crop',
        alt: 'Man and Women holding there child',
        categories: ['street', 'pier', 'seafront', 'groups'],
      },

    ],
    []
  );

  // Filter logic
  const filteredImages = useMemo(
    () =>
      activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.categories.includes(activeCategory)),
    [activeCategory, galleryImages]
  );

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-black pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Browse through our collection of graduation photos at Brighton's most iconic locations.
          </p>
        </div>
      </div>

      {/* Gallery Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={
                  `px-4 py-2 rounded-md transition-colors
                  ${activeCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`
                }
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
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

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your own graduation photoshoot at Brighton Seafront and create memories that will last a lifetime.
          </p>
          <a
            href="/contact"
            className="bg-white text-black hover:bg-gray-100 py-3 px-8 rounded-md font-medium text-lg inline-block transition-colors"
          >
            Book Your Session Now
          </a>
        </div>
      </section>
    </div>
  );
});
