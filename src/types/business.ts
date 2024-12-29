export interface Business {
  id: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  description?: string;
  tier: 'ICON' | 'ENHANCED' | 'FEATURED' | 'HERO';
  images?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface BusinessFormData {
  businessName: string;
  firstName: string;
  lastName: string;
  businessEmail: string;
  phone?: string;
  website?: string;
  business_address: string;
  description: string;
  tier?: 'ICON' | 'ENHANCED' | 'FEATURED' | 'HERO';
}