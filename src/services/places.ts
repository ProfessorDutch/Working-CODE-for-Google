import { GOOGLE_MAPS_CONFIG } from '../config/google-maps';

export async function searchPlaces(query: string) {
  if (!query.trim()) return [];

  // Create map element for Places Service
  const mapDiv = document.createElement('div');
  const service = new google.maps.places.PlacesService(mapDiv);

  const request = {
    query,
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photos', 'website', 'formatted_phone_number']
  };

  return new Promise((resolve, reject) => {
    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        console.log('Places API results:', results);
        resolve(results);
      } else {
        console.error('Places API error:', status);
        reject(new Error('Failed to search places'));
      }
    });
  });
}