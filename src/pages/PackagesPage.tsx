import React from 'react';
import { PackageCard } from '../components/PackageCard';
import { CheckIcon } from 'lucide-react';

export const PackagesPage = () => {
  const packages = [
    {
      title: 'Essential Package',
      price: '£100',
      features: [
        'Best For: Solo Graduates',
        'Duration: 40 minutes',
        '10–12 professionally edited photos',
        'One iconic location (e.g., Brighton Pier or campus)',
        'Posed and candid shots',
        '3-day delivery'
      ]
    },
    {
      title: 'Signature Package',
      price: '£150',
      features: [
        'Best For: Friends / Small Groups (2–3 people)',
        'Duration: 1 hour',
        '25–30 professionally edited photos',
        'Up to 2 nearby locations',
        'Solo and group portraits',
        'Optional cap toss or walking shots',
        '3-day delivery'
      ]
    },
    {
      title: 'Premier Package',
      price: '£200',
      features: [
        'Best For: Families or Groups (4–6 people)',
        'Duration: 1.5 hours',
        '40–50 edited photos + 30-sec cinematic video',
        'Multiple nearby locations',
        'Candid and posed moments (e.g., walking, laughter, confetti)',
        'Delivered in vertical + landscape formats',
        '4-day delivery'
      ],
      isPopular: true
    }
  ];

  const addOns = [
    { title: 'Extra Person (per person)', price: '£10' },
    { title: 'Rush Delivery (24 hours)', price: '£30' },
    { title: '1-Minute Video Montage', price: '£50' },
    { title: 'Printed Album (20 pages)', price: '£60' }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-black pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Photography Packages</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Choose a fixed-price package tailored to your needs—whether solo, with friends, or celebrating with family.
          </p>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                isPopular={pkg.isPopular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Add-Ons */}
      <section className="py-16 mt-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">What's Included & Additional Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Every package includes essentials to ensure a premium experience. Personalize your shoot with optional add-ons.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 max-w-4xl mx-auto">
            {[
              'Professional photographer with creative direction',
              'Pre-shoot planning and consultation',
              'High-quality editing and color correction',
              'Choice of scenic outdoor or studio setup',
              'Digital delivery of final photos',
              'Props available upon request'
            ].map((item, index) => (
              <div className="flex items-start text-white" key={index}>
                <CheckIcon size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-white mb-4">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-white">{addon.title}</h3>
                  <p className="text-white font-bold">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
