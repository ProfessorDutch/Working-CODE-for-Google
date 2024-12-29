import React from 'react';
import type { Business } from '../../types/business';
import type { BusinessTier } from '../../constants/businessTiers';
import IconListing from './listings/IconListing';
import EnhancedListing from './listings/EnhancedListing';
import FeaturedListing from './listings/FeaturedListing';
import HeroListing from './listings/HeroListing';

interface BusinessCardProps {
  business: Business;
  tier: BusinessTier;
}

export default function BusinessCard({ business, tier }: BusinessCardProps) {
  const cardClasses = {
    ICON: 'col-span-1',
    ENHANCED: 'col-span-1 border-2 border-patriot-red shadow-lg',
    FEATURED: 'col-span-2 shadow-xl',
    HERO: 'col-span-full shadow-2xl'
  };

  return (
    <div className={`${cardClasses[tier]} bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-lg`}>
      {tier === 'ICON' && <IconListing business={business} />}
      {tier === 'ENHANCED' && <EnhancedListing business={business} />}
      {tier === 'FEATURED' && <FeaturedListing business={business} />}
      {tier === 'HERO' && <HeroListing business={business} />}
    </div>
  );
}