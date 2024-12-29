import { supabase } from '../../config/supabase';
import type { Business } from '../../types/business';

export async function searchBusinesses(params: {
  query?: string;
  location?: string;
  radius?: number;
}): Promise<Business[]> {
  try {
    let query = supabase
      .from('businesses')
      .select('*');

    if (params.query) {
      query = query.or(`name.ilike.%${params.query}%,description.ilike.%${params.query}%`);
    }

    if (params.location) {
      query = query.ilike('address', `%${params.location}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Business search error:', error);
      throw error;
    }

    return data || [];
  } catch (err) {
    console.error('Failed to search businesses:', err);
    throw err;
  }
}