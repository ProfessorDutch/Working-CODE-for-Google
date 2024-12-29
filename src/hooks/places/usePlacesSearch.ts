import { useState, useCallback } from 'react';
import { useGoogleMapsInit } from '../useGoogleMapsInit';
import type { Business } from '../../types/business';

export function usePlacesSearch() {
  const { isLoaded, error: mapsError } = useGoogleMapsInit();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(mapsError);

  const search = useCallback(async (query: string): Promise<Business[]> => {
    if (!isLoaded) {
      setError('Google Maps not loaded');
      return [];
    }

    if (!query.trim()) return [];

    setLoading(true);
    setError(null);

    try {
      // Create map element for Places Service
      const mapDiv = document.createElement('div');
      const service = new google.maps.places.PlacesService(mapDiv);

      const results = await new Promise<google.maps.places.PlaceResult[]>((resolve, reject) => {
        service.textSearch({
          query,
          fields: ['name', 'formatted_address', 'place_id', 'formatted_phone_number', 'website']
        }, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            resolve(results);
          } else {
            reject(new Error('Failed to search places'));
          }
        });
      });

      return results.map(place => ({
        id: place.place_id!,
        name: place.name!,
        address: place.formatted_address!,
        phone: place.formatted_phone_number,
        website: place.website,
        description: '',
        tier: 'ICON'
      }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to search businesses';
      setError(errorMessage);
      console.error('Places search failed:', err);
      return [];
    } finally {
      setLoading(false);
    }
  }, [isLoaded]);

  return {
    loading,
    error,
    search,
    isLoaded
  };
}