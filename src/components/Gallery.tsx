import React, { useState } from 'react';
import { XIcon } from 'lucide-react';

interface GalleryProps {
  images: {
    src: string;
    alt: string;
    category?: string;
  }[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              // Responsive images with srcSet and sizes
              srcSet={`${image.src}?w=500 500w, ${image.src}?w=1000 1000w, ${image.src}?w=1500 1500w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy" // Lazy load images
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <XIcon size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
