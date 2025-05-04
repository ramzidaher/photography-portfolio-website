import React from 'react';
interface TestimonialCardProps {
  name: string;
  text: string;
  image?: string;
}
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  image
}) => {
  return <div className="space-y-4">
      <p className="text-gray-600 italic font-light">{text}</p>
      <div className="flex items-center">
        {image ? <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover mr-3" /> : <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <span className="text-gray-500">{name.charAt(0)}</span>
          </div>}
        <span className="text-sm text-gray-900">{name}</span>
      </div>
    </div>;
};