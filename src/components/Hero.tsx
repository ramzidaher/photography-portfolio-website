import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { Helmet } from 'react-helmet';

export const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const heroImageUrl = "https://res.cloudinary.com/druct3maa/image/upload/v1746448425/DSC07607_1_onjoxv.jpg";

  return (
    <div className="relative h-screen bg-black flex items-center justify-center">
      <Helmet>
        {/* Preload hero image for faster rendering */}
        <link
          rel="preload"
          href={heroImageUrl}
          as="image"
        />
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
        }}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl text-white font-light mb-6 tracking-wider">
          Capturing Moments
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto px-6">
          Brighton-based photographer specializing in graduation and portrait
          photography
        </p>
      </div>
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300"
      >
        <ArrowDownIcon size={32} className="animate-bounce" />
      </button>
    </div>
  );
};
