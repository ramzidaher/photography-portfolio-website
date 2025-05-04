import React, { memo } from 'react';
import { PackageCard } from '../components/PackageCard';
import { CheckIcon } from 'lucide-react';

export const PackagesPage = () => {
  const packages = [{
    title: 'Basic',
    price: '£79',
    features: ['20-minute session', '3 edited digital photos', 'One location', 'Single outfit']
  }, {
    title: 'Standard',
    price: '£149',
    features: ['30-minute session', '10 edited digital photos', 'One location', '1 outfit change', 'Online gallery']
  }, {
    title: 'Premium',
    price: '£249',
    features: ['1-hour session', '20 edited digital photos', 'Multiple locations', '3 outfit changes', 'Online gallery', '1 printed 8×10 photo'],
    isPopular: true
  }, {
    title: 'Ultimate',
    price: '£399',
    features: ['2-hour session', '30 edited digital photos', 'Multiple locations', 'Unlimited outfit changes', 'Online gallery', '5 printed photos', 'Custom photo album']
  }];

  const addOns = [{
    title: 'Additional Digital Photos',
    price: '£15 each'
  }, {
    title: 'Rush Editing (48 hours)',
    price: '£50'
  }, {
    title: 'Additional Hour',
    price: '£100'
  }, {
    title: 'Mini Video Highlight (30 seconds)',
    price: '£99'
  }, {
    title: 'Full Video Coverage (3-5 minutes)',
    price: '£199'
  }, {
    title: 'Photo Album (20 pages)',
    price: '£120'
  }];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-black pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Photography Packages</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Choose the perfect package to capture your special moments, whether it's a portrait, event, or any other photography session.
          </p>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Combined What's Included and Additional Services Section */}
      <section className="py-16 mt-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              What's Included & Additional Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              All our photography packages include these essential services to ensure you have a great experience. You can also customize your package with these additional services to make your photos even more special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 max-w-4xl mx-auto">
            {/* What's Included */}
            {['Professional photographer with experience in various photography styles',
              'Pre-shoot consultation to plan your perfect photos',
              'Professional editing and color correction',
              'Choice of iconic locations or studio setup',
              'Digital delivery of photos',
              'Basic props available for shoots'].map((item, index) => (
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
