import React from 'react';
import { Link } from 'react-router-dom';
interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}
export const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  features,
  isPopular = false
}) => {
  return <div className="p-8 bg-white">
      <div className="space-y-4">
        <h3 className="text-xl font-light">{title}</h3>
        <div className="text-3xl font-light">{price}</div>
        <ul className="space-y-3 text-gray-600">
          {features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
        <Link to="/contact" className="block w-full mt-8 py-3 text-center border border-gray-200 hover:border-gray-900 transition-colors">
          Book Session
        </Link>
      </div>
    </div>;
};