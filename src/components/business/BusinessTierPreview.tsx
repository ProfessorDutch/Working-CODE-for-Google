import React from 'react';
import { BUSINESS_TIERS } from '../../constants/businessTiers';
import BusinessTierExample from './BusinessTierExample';
import BusinessTierHeader from './BusinessTierHeader';

export default function BusinessTierPreview() {
  // Order tiers by price: ICON (free) -> ENHANCED -> FEATURED -> HERO
  const orderedTiers = [
    { tier: 'ICON', badge: 'Free' },
    { tier: 'ENHANCED', badge: 'Enhanced' },
    { tier: 'FEATURED', badge: 'Featured' },
    { tier: 'HERO', badge: 'Premium' }
  ] as const;

  return (
    <div className="space-y-8">
      {orderedTiers.map(({ tier, badge }) => (
        <div key={tier} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <BusinessTierHeader 
            tier={tier} 
            badge={badge} 
            price={BUSINESS_TIERS[tier].price} 
            description={BUSINESS_TIERS[tier].description}
          />

          <div className="p-6">
            <BusinessTierExample 
              name={`${badge} Business Example`}
              tier={tier}
            />

            <div className="mt-6 border-t border-gray-100 pt-6">
              <h4 className="text-sm font-semibold text-patriot-navy mb-3">Included Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {BUSINESS_TIERS[tier].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                    <span className="text-sm text-patriot-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}