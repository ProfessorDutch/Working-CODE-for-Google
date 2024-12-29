import React from 'react';
import { Star, Users, Building2 } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: 0,
    features: [
      'Basic business listing',
      'Contact information',
      'Business hours',
      'Map location'
    ]
  },
  {
    name: 'Growth',
    price: 29,
    features: [
      'Everything in Basic',
      'Enhanced listing style',
      'Custom business description',
      'Photo gallery',
      'Featured in search results'
    ]
  },
  {
    name: 'Premium',
    price: 99,
    features: [
      'Everything in Growth',
      'Top of search results',
      'Custom branding colors',
      'Social media integration',
      'Analytics dashboard',
      'Priority support'
    ]
  }
];

export default function UpgradeOffer({ 
  business,
  onComplete,
  onSkip 
}: { 
  business: any;
  onComplete: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Star className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h3 className="text-xl font-bold text-patriot-navy mb-2">
          Enhance Your Business Presence
        </h3>
        <p className="text-patriot-blue mb-6">
          Choose a plan that fits your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((tier) => (
          <div 
            key={tier.name}
            className="border-2 border-gray-200 rounded-xl p-6 hover:border-patriot-red transition-colors"
          >
            <h4 className="text-lg font-bold text-patriot-navy mb-2">
              {tier.name}
            </h4>
            <p className="text-2xl font-bold text-patriot-red mb-4">
              ${tier.price}<span className="text-sm text-patriot-gray">/mo</span>
            </p>
            <ul className="space-y-2 mb-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                  <span className="text-sm text-patriot-gray">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={tier.price === 0 ? onSkip : onComplete}
              className={`w-full py-2 rounded-full font-medium ${
                tier.price === 0
                  ? 'bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white'
                  : 'bg-patriot-red text-white hover:bg-patriot-crimson'
              } transition-colors`}
            >
              {tier.price === 0 ? 'Continue with Basic' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}