import React from 'react';
import { Building2, Star } from 'lucide-react';
import type { Business } from '../../types/business';
import { BUSINESS_TIERS } from '../../constants/businessTiers';
import BusinessCard from './BusinessCard';

interface BusinessListProps {
  businesses: Business[];
  loading?: boolean;
}

export default function BusinessList({ businesses, loading }: BusinessListProps) {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-patriot-red border-t-transparent mx-auto"></div>
        <p className="mt-4 text-patriot-blue">Searching businesses...</p>
      </div>
    );
  }

  if (!businesses.length) {
    return (
      <div className="text-center py-8">
        <Building2 className="w-12 h-12 text-patriot-blue mx-auto mb-4" />
        <p className="text-patriot-blue">No businesses found. Try adjusting your search.</p>
      </div>
    );
  }

  // Group businesses by tier for display order
  const groupedBusinesses = businesses.reduce((acc, business) => {
    acc[business.tier] = [...(acc[business.tier] || []), business];
    return acc;
  }, {} as Record<string, Business[]>);

  return (
    <div>
      {/* Hero Listings */}
      {groupedBusinesses.HERO?.map(business => (
        <BusinessCard key={business.id} business={business} tier="HERO" />
      ))}

      {/* Featured Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {groupedBusinesses.FEATURED?.map(business => (
          <BusinessCard key={business.id} business={business} tier="FEATURED" />
        ))}
      </div>

      {/* Enhanced Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {groupedBusinesses.ENHANCED?.map(business => (
          <BusinessCard key={business.id} business={business} tier="ENHANCED" />
        ))}
      </div>

      {/* Basic (ICON) Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {groupedBusinesses.ICON?.map(business => (
          <BusinessCard key={business.id} business={business} tier="ICON" />
        ))}
      </div>

      {/* Upgrade CTA */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg text-center">
        <Star className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h3 className="text-xl font-bold text-patriot-navy mb-2">
          Want your business to stand out?
        </h3>
        <p className="text-patriot-blue mb-4">
          Choose from our premium listing tiers starting at ${BUSINESS_TIERS.ENHANCED.price}/month
        </p>
        <button 
          onClick={() => window.location.href = '/claim-business'}
          className="bg-patriot-red text-white px-6 py-2 rounded-full hover:bg-patriot-crimson transition-colors"
        >
          Upgrade Your Listing
        </button>
      </div>
    </div>
  );
}