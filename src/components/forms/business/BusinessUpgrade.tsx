import React, { useState } from 'react';
import { Sprout, ArrowRight } from 'lucide-react';
import BusinessTierPreview from '../../business/BusinessTierPreview';
import { BUSINESS_TIERS } from '../../../constants/businessTiers';
import type { BusinessTier } from '../../../constants/businessTiers';

interface BusinessUpgradeProps {
  business: {
    name: string;
    address: string;
    placeId: string;
  };
  onComplete: () => void;
  onSkip: () => void;
}

export default function BusinessUpgrade({ business, onComplete, onSkip }: BusinessUpgradeProps) {
  const [selectedTier, setSelectedTier] = useState<BusinessTier | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectPlan = async (tier: BusinessTier) => {
    try {
      setIsSubmitting(true);
      setSelectedTier(tier);
      
      if (tier === 'ICON') {
        onSkip();
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      onComplete();
    } catch (error) {
      console.error('Error selecting plan:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl mx-auto my-4 overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <BusinessTierPreview />
        </div>

        {/* Footer - Fixed */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex justify-end gap-4">
            <button
              onClick={() => handleSelectPlan('ICON')}
              disabled={isSubmitting}
              className="px-6 py-2 rounded-lg border-2 border-patriot-navy text-patriot-navy hover:bg-patriot-navy hover:text-white transition-colors"
            >
              <Sprout className="w-5 h-5 inline mr-2" />
              Continue Free
            </button>
            <button
              onClick={() => handleSelectPlan('ENHANCED')}
              disabled={isSubmitting}
              className="px-6 py-2 rounded-lg bg-patriot-red text-white hover:bg-patriot-crimson transition-colors"
            >
              {isSubmitting ? 'Processing...' : (
                <>Upgrade <ArrowRight className="w-5 h-5 inline ml-2" /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}