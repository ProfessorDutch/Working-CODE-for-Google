import React from 'react';
import { Sprout } from 'lucide-react';
import type { Business } from '../../../types/business';

export default function IconListing({ business }: { business: Business }) {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <Sprout className="w-5 h-5 text-green-600" />
        <h3 className="text-sm text-patriot-navy">{business.name}</h3>
      </div>
      <p className="text-xs text-patriot-gray">{business.address}</p>
      {business.phone && (
        <p className="text-xs text-patriot-gray mt-1">{business.phone}</p>
      )}
    </div>
  );
}