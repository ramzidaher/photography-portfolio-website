import React from 'react';
import { PackageCard } from '../components/PackageCard';
import { CheckIcon, StarIcon } from 'lucide-react';

export const PackagesPage = () => {
  const packages = [
    {
      title: 'Solo Portrait Package',
      price: '£80',
      features: [
        'Best For: Solo Graduates',
        'Duration: 20 minutes',
        '8 professionally edited studio-style portraits',
        'Classic headshots and cap-toss',
        '3-day delivery'
      ]
    },
    {
      title: 'Essential Package',
      price: '£120',
      features: [
        'Best For: Graduate + Family',
        'Duration: 30 minutes',
        '12 professionally edited photos',
        'Posed family & individual shots',
        'Post-ceremony or pre-ceremony session',
        '3-day delivery'
      ]
    },
    {
      title: 'Premium Package',
      price: '£250',
      features: [
        'Best For: Groups & Extended Coverage',
        'Duration: 2 hours',
        '50+ professionally edited photos',
        '1-minute highlight video',
        'Candid, posed & cap-toss moments',
        '4-day delivery'
      ],
      isPopular: true
    }
  ];

  const addOns = [
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
            Professional solo, family, and premium packages—no hidden fees.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
            Sessions occur post-ceremony or pre-ceremony on request—perfect for capturing every memory.
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
              Creative direction, expert editing, and online delivery come standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 max-w-4xl mx-auto mb-12">
            {[
              'Pre-shoot consultation & planning',
              'Professional lighting guidance',
              'High-resolution editing & color correction',
              'Online gallery delivery',
              'Props available on request'
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
