import React from 'react';
import { BUSINESS_TIERS } from '../../constants/businessTiers';
import BusinessTierExample from '../business/BusinessTierExample';

export default function DirectoryTiers() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Icon Listing (Free) */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-patriot-navy mb-2">Icon Listing</h3>
            <p className="text-patriot-gray font-bold">Free</p>
          </div>
          <BusinessTierExample name="Example Business" tier="ICON" />
        </div>

        {/* Enhanced Listing */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-patriot-navy mb-2">Enhanced Listing</h3>
            <p className="text-patriot-navy font-bold">${BUSINESS_TIERS.ENHANCED.price}/month</p>
          </div>
          <BusinessTierExample name="Example Business" tier="ENHANCED" />
        </div>

        {/* Featured Listing */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-patriot-navy mb-2">Featured Listing</h3>
            <p className="text-green-600 font-bold">${BUSINESS_TIERS.FEATURED.price}/month</p>
          </div>
          <BusinessTierExample name="Example Business" tier="FEATURED" />
        </div>

        {/* Hero Listing */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-patriot-navy mb-2">Hero Listing</h3>
            <p className="text-patriot-red font-bold">${BUSINESS_TIERS.HERO.price}/month</p>
          </div>
          <BusinessTierExample name="Example Business" tier="HERO" />
        </div>
      </div>
    </div>
  );
}