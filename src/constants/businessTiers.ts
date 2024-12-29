export const BUSINESS_TIERS = {
  ICON: {
    name: 'Icon Listing',
    price: 0,
    description: 'Basic business listing with green Mustard Seed icon',
    features: ['Business name', 'Address', 'Contact info', 'Green Mustard Seed icon']
  },
  ENHANCED: {
    name: 'Enhanced Listing',
    price: 99,
    description: 'Highlighted card with priority placement',
    features: ['Everything in Icon', 'Highlighted card', 'Priority placement', 'Business description']
  },
  FEATURED: {
    name: 'Featured Listing',
    price: 199,
    description: 'Double-width card with image',
    features: ['Everything in Enhanced', 'Double-width card', 'Custom image', 'Larger font size']
  },
  HERO: {
    name: 'Hero Listing',
    price: 499,
    description: 'Full-width hero section placement',
    features: ['Everything in Featured', 'Hero section placement', 'Multiple images', 'Premium branding']
  }
} as const;

export type BusinessTier = keyof typeof BUSINESS_TIERS;