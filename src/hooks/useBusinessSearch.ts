import { useState, useCallback } from 'react';
import { searchPlaces } from '../services/places/search';
import type { Business } from '../types/business';

export function useBusinessSearch() {
  const [results, setResults] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const places = await searchPlaces(query);
      
      // Transform Places results to Business type
      const businesses = places.map(place => ({
        id: place.place_id!,
        name: place.name!,
        address: place.formatted_address!,
        phone: place.formatted_phone_number,
        website: place.website,
        description: '',
        tier: 'ICON' as const
      }));

      setResults(businesses);
    } catch (err) {
      console.error('Search failed:', err);
      setError('Failed to search businesses. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    results,
    loading,
    error,
    search
  };
}