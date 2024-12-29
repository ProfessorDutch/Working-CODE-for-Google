import React from 'react';
import { Sprout, MapPin, Phone, Globe } from 'lucide-react';
import type { Business } from '../../../types/business';

export default function FeaturedListing({ business }: { business: Business }) {
  return (
    <div className="grid grid-cols-2 h-full">
      {business.image && (
        <div className="relative h-full">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      
      <div className="p-6 bg-white">
        <div className="flex items-center gap-3 mb-4">
          <Sprout className="w-8 h-8 text-green-600" />
          <h3 className="text-2xl font-bold text-patriot-navy">{business.name}</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-patriot-red flex-shrink-0 mt-1" />
            <p className="text-lg text-patriot-blue">{business.address}</p>
          </div>
          
          {business.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-patriot-red" />
              <p className="text-lg text-patriot-blue">{business.phone}</p>
            </div>
          )}
          
          {business.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-patriot-red" />
              <a 
                href={`https://${business.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-patriot-blue hover:text-patriot-red transition-colors"
              >
                {business.website}
              </a>
            </div>
          )}
        </div>

        {business.description && (
          <p className="mt-6 text-lg text-patriot-gray">{business.description}</p>
        )}
      </div>
    </div>
  );
}