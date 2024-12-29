import React from 'react';
import { Sprout, MapPin, Phone } from 'lucide-react';
import type { BusinessTier } from '../../constants/businessTiers';

interface BusinessTierExampleProps {
  name: string;
  tier: BusinessTier;
}

export default function BusinessTierExample({ name, tier }: BusinessTierExampleProps) {
  // Example business data - same for all tiers
  const business = {
    name,
    address: '123 Main St, Atlanta, GA 30303',
    phone: '(404) 555-0123'
  };

  const renderContactInfo = (iconClasses: string, textClasses: string) => (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        <MapPin className={iconClasses} />
        <span className={textClasses}>{business.address}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        <Phone className={iconClasses} />
        <span className={textClasses}>{business.phone}</span>
      </div>
    </div>
  );

  switch (tier) {
    case 'HERO':
      return (
        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4">
              <Sprout className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-white">{business.name}</h3>
            </div>
            {renderContactInfo(
              "w-5 h-5 text-patriot-red",
              "text-sm text-white"
            )}
          </div>
        </div>
      );

    case 'FEATURED':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 sm:h-full">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4">
              <Sprout className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-patriot-navy">{business.name}</h3>
            </div>
            {renderContactInfo(
              "w-4 h-4 text-patriot-red",
              "text-sm text-patriot-blue"
            )}
          </div>
        </div>
      );

    case 'ENHANCED':
      return (
        <div className="bg-white p-6 rounded-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4">
            <Sprout className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-bold text-patriot-navy">{business.name}</h3>
          </div>
          {renderContactInfo(
            "w-4 h-4 text-patriot-red",
            "text-sm text-patriot-blue"
          )}
        </div>
      );

    case 'ICON':
      return (
        <div className="bg-white p-4 rounded-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-2">
            <Sprout className="w-5 h-5 text-green-600" />
            <h3 className="text-sm font-medium text-patriot-navy">{business.name}</h3>
          </div>
          <div className="space-y-1 ml-0 sm:ml-7">
            <p className="text-xs text-patriot-gray">{business.address}</p>
            <p className="text-xs text-patriot-gray">{business.phone}</p>
          </div>
        </div>
      );
  }
}