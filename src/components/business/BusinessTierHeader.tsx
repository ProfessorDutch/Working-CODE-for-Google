import React from 'react';
import { Star } from 'lucide-react';

interface BusinessTierHeaderProps {
  tier: 'ICON' | 'ENHANCED' | 'FEATURED' | 'HERO';
  badge: string;
  price: number;
  description: string;
}

export default function BusinessTierHeader({ tier, badge, price, description }: BusinessTierHeaderProps) {
  const colors = {
    HERO: 'bg-patriot-red',
    FEATURED: 'bg-green-600',
    ENHANCED: 'bg-patriot-navy',
    ICON: 'bg-white'
  };

  const textColors = {
    HERO: 'text-white',
    FEATURED: 'text-white',
    ENHANCED: 'text-white',
    ICON: 'text-patriot-navy'
  };

  return (
    <div className={`${colors[tier]} ${textColors[tier]} p-6`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <Star className={tier === 'ICON' ? 'text-patriot-navy' : 'text-white'} />
          <h3 className="text-xl font-bold">{badge} Listing</h3>
        </div>
        <div className="text-lg font-bold">
          {tier === 'ICON' ? (
            <span className="text-patriot-gray">Free</span>
          ) : (
            <span>${price}<span className="text-sm opacity-75">/mo</span></span>
          )}
        </div>
      </div>
      <p className={tier === 'ICON' ? 'text-patriot-gray' : 'text-white/90'}>{description}</p>
    </div>
  );
}