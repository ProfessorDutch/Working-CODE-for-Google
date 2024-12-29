import { supabase } from '../config/supabase';
import type { Business } from '../types/business';

export async function searchBusinesses(query: string): Promise<Business[]> {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .ilike('name', `%${query}%`);

  if (error) {
    console.error('Search error:', error);
    throw error;
  }

  return data || [];
}

export async function createBusiness(formData: {
  businessName: string;
  firstName: string;
  lastName: string;
  businessEmail: string;
  phone?: string;
  website?: string;
  business_address: string;
  description: string;
  tier?: 'ICON' | 'ENHANCED' | 'FEATURED' | 'HERO';
}) {
  try {
    const { data, error } = await supabase
      .from('businesses')
      .insert({
        name: formData.businessName,
        address: formData.business_address,
        phone: formData.phone,
        website: formData.website?.replace(/^https?:\/\//, ''),
        description: formData.description,
        tier: formData.tier || 'ICON',
        contact: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.businessEmail
        }
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Failed to create business:', err);
    throw err;
  }
}

export async function getBusinessById(id: string): Promise<Business | null> {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}