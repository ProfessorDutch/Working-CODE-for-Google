import React from 'react';
import { Sprout, MapPin, Phone, Globe } from 'lucide-react';
import type { Business } from '../../../types/business';

export default function EnhancedListing({ business }: { business: Business }) {
  return (
    <div className="p-6 bg-white">
      <div className="flex items-center gap-3 mb-4">
        <Sprout className="w-6 h-6 text-green-600" />
        <h3 className="text-base font-semibold text-patriot-navy">{business.name}</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-patriot-red flex-shrink-0 mt-1" />
          <p className="text-sm text-patriot-blue">{business.address}</p>
        </div>
        
        {business.phone && (
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-patriot-red" />
            <p className="text-sm text-patriot-blue">{business.phone}</p>
          </div>
        )}
        
        {business.website && (
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-patriot-red" />
            <a 
              href={`https://${business.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-patriot-blue hover:text-patriot-red transition-colors"
            >
              {business.website}
            </a>
          </div>
        )}
      </div>

      {business.description && (
        <p className="mt-4 text-sm text-patriot-gray">{business.description}</p>
      )}
    </div>
  );
}