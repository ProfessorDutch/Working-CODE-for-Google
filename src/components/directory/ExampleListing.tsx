import React from 'react';
import { Sprout, MapPin, Phone } from 'lucide-react';

export default function ExampleListing() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
      <h3 className="text-lg font-semibold text-patriot-navy mb-4">Example Member Listing:</h3>
      <div className="border-2 border-patriot-cream rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <Sprout className="w-6 h-6 text-green-600" />
          <h4 className="font-semibold text-patriot-navy">Grace & Faith Bookstore</h4>
        </div>
        <div className="space-y-2 text-sm text-patriot-gray">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-patriot-red flex-shrink-0 mt-1" />
            <span>1234 Blessing Avenue, Faith City, FC 12345</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-patriot-red" />
            <span>(555) 123-4567</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-patriot-blue">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
            Mustard Seed Member
          </span>
        </div>
      </div>
    </div>
  );
}