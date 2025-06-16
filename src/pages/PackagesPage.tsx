import React from 'react';
import { PackageCard } from '../components/PackageCard';
import { CheckIcon, StarIcon } from 'lucide-react';

export const PackagesPage = () => {
  const packages = [
    {
      title: 'Essential Package',
      price: '£100',
      features: [
        'Best For: Solo Graduates',
        'Duration: 30 minutes',
        '10 professionally edited photos',
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
        '25 professionally edited photos',
        'Up to 2 nearby locations',
        'Solo, group & candid portraits',
        'Optional cap toss or walking shots',
        '3-day delivery'
      ]
    },
    {
      title: 'Premier Package',
      price: '£200',
      features: [
        'Best For: Families or Larger Groups (4–6 people)',
        'Duration: 2 hours',
        '50+ professionally edited photos',
        'Prints package (5×7 & 8×10) + digital album',
        'Multiple scenic locations',
        'Candid & posed moments (confetti, laughter, walking)',
        '4-day delivery'
      ],
      isPopular: true
    }
  ];

  const addOns = [
    { title: 'Extra Person (per person)', price: '£10' },
    { title: 'Rush Delivery (24 hours)', price: '£30' },
    { title: 'Printed Album (20 pages)', price: '£60' },
    { title: '1-Minute Video Montage', price: '£50' }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <header className="bg-gray-800 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Graduation Photography Packages</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select a fixed-rate package tailored to your celebration—solo, friends, or family.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
            Sessions are scheduled before or after the graduation ceremony due to venue restrictions (no indoor ceremony coverage). Pre-ceremony shoots are available on request.
          </p>
        </div>
      </header>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <PackageCard
                key={idx}
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
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Included in Every Package</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All shoots include expert direction, high-end editing, and seamless digital delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 max-w-4xl mx-auto mb-12">
            {[
              'Professional photographer with creative guidance',
              'Pre-shoot consultation and planning',
              'High-resolution editing & color correction',
              'Choice of scenic outdoor or studio backdrop',
              'Digital delivery via online gallery',
              'Props available upon request'
            ].map((item, i) => (
              <div className="flex items-start text-white" key={i}>
                <CheckIcon size={20} className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Optional Add-Ons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {addOns.map((addon, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 relative">
                  {addon.title.includes('Rush') && <StarIcon size={16} className="text-yellow-400 absolute top-4 right-4" />}
                  <h4 className="text-lg font-medium text-white mb-2">{addon.title}</h4>
                  <p className="text-white font-bold text-xl">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
