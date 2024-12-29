import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useGoogleMapsInit } from '../../hooks/useGoogleMapsInit';

interface BusinessSearchProps {
  onSelect: (business: {
    name: string;
    address: string;
    placeId: string;
    phone?: string;
    website?: string;
  }) => void;
}

export default function BusinessSearch({ onSelect }: BusinessSearchProps) {
  const { isLoaded, error: mapsError } = useGoogleMapsInit();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (value: string) => {
    if (!isLoaded) return;
    
    setSearchTerm(value);
    setError(null);
    
    if (!value.trim()) {
      setResults([]);
      return;
    }

    const mapDiv = document.createElement('div');
    const service = new google.maps.places.PlacesService(mapDiv);

    service.textSearch({
      query: value,
      fields: ['name', 'formatted_address', 'place_id', 'formatted_phone_number', 'website']
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const businesses = results.map(place => ({
          name: place.name,
          address: place.formatted_address,
          placeId: place.place_id,
          phone: place.formatted_phone_number,
          website: place.website
        }));
        setResults(businesses);
      } else {
        setError('No businesses found');
        setResults([]);
      }
    });
  };

  if (!isLoaded) {
    return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          disabled
          placeholder="Loading places search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
        />
      </div>
    );
  }

  if (mapsError) {
    return (
      <div className="text-red-600 text-sm p-4 bg-red-50 rounded-lg">
        {mapsError}
      </div>
    );
  }

  return (
    <div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for businesses"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}

      {results.length > 0 && (
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
            </button>
          ))}
        </div>
      )}
    </div>
  );
}