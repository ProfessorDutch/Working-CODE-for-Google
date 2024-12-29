import { supabase } from '../../config/supabase';
import type { Business } from '../../types/business';

export async function searchBusinesses(query: string): Promise<Business[]> {
  if (!query?.trim()) return [];

  try {
    // Log the search attempt for debugging
    console.log('Searching businesses with query:', query);

    // Simple, focused search across key fields
    const { data, error } = await supabase
      .from('businesses')
      .select('*')
      .or(`name.ilike.%${query}%,address.ilike.%${query}%,description.ilike.%${query}%`)
      .order('tier', { ascending: false }); // Show featured listings first

    if (error) {
      console.error('Search error:', error);
      throw new Error('Failed to search businesses');
    }

    // Log results for debugging
    console.log('Search results:', {
      count: data?.length || 0,
      results: data
    });
    
    return data || [];
  } catch (err) {
    console.error('Search failed:', err);
    throw new Error('Failed to search businesses');
  }
}