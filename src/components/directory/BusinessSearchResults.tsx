import React from 'react';

interface Business {
  name: string;
  address: string;
  website?: string;
  phone?: string;
  placeId: string;
}

interface BusinessSearchResultsProps {
  results: Business[];
  onSelect: (business: Business) => void;
}

export default function BusinessSearchResults({ results, onSelect }: BusinessSearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="mt-6 space-y-4">
      <h3 className="font-semibold text-patriot-navy">Search Results</h3>
      {results.map((business) => (
        <button
          key={business.placeId}
          onClick={() => onSelect(business)}
          className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-patriot-red hover:bg-patriot-cream transition-colors"
        >
          <h4 className="font-semibold text-patriot-navy">{business.name}</h4>
          <p className="text-sm text-patriot-blue">{business.address}</p>
          {business.phone && (
            <p className="text-sm text-patriot-gray mt-1">{business.phone}</p>
          )}
        </button>
      ))}
    </div>
  );
}