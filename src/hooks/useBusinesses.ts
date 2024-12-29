import { useState, useCallback } from 'react';
import { supabase } from '../config/supabase';
import type { Business } from '../types/business';

export function useBusinesses() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchBusinesses = useCallback(async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: searchError } = await supabase
        .from('businesses')
        .select('*')
        .ilike('name', `%${query}%`);

      if (searchError) throw searchError;
      setBusinesses(data || []);
    } catch (err) {
      console.error('Failed to search businesses:', err);
      setError(err instanceof Error ? err.message : 'Failed to search businesses');
      setBusinesses([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    businesses,
    loading,
    error,
    searchBusinesses
  };
}