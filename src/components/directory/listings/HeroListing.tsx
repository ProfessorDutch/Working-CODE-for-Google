import React from 'react';
import { Sprout, MapPin, Phone, Globe } from 'lucide-react';
import type { Business } from '../../../types/business';

export default function HeroListing({ business }: { business: Business }) {
  return (
    <div className="relative h-[400px]">
      {business.image && (
        <>
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </>
      )}
      
      <div className="absolute inset-0 flex items-end p-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Sprout className="w-12 h-12 text-green-500" />
            <h3 className="text-4xl font-bold text-white">{business.name}</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-6 h-6 text-patriot-red flex-shrink-0 mt-1" />
                <p className="text-xl text-white">{business.address}</p>
              </div>
              
              {business.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-patriot-red" />
                  <p className="text-xl text-white">{business.phone}</p>
                </div>
              )}
              
              {business.website && (
                <div className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-patriot-red" />
                  <a 
                    href={`https://${business.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-patriot-red transition-colors"
                  >
                    {business.website}
                  </a>
                </div>
              )}
            </div>

            {business.description && (
              <div className="col-span-2">
                <p className="text-xl text-white/90">{business.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}