import { useState, useEffect } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDTa2qStQ1jaIvxbP6dGZEQeQJYDhF39Dw';
const SCRIPT_ID = 'google-maps-script';

export function useGoogleMapsInit() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if Maps is already loaded
    if (window.google?.maps) {
      setIsLoaded(true);
      return;
    }

    // Check if script is already in the DOM
    const existingScript = document.getElementById(SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener('load', () => setIsLoaded(true));
      existingScript.addEventListener('error', () => setError('Failed to load Google Maps'));
      return;
    }

    // Create new script if needed
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.addEventListener('load', () => setIsLoaded(true));
    script.addEventListener('error', () => setError('Failed to load Google Maps'));

    document.head.appendChild(script);

    // Cleanup
    return () => {
      // Only remove event listeners, don't remove the script
      script.removeEventListener('load', () => setIsLoaded(true));
      script.removeEventListener('error', () => setError('Failed to load Google Maps'));
    };
  }, []);

  return { isLoaded, error };
}