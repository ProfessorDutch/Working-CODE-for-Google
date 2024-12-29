import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import BusinessDetails from './BusinessDetails';
import BusinessUpgrade from './BusinessUpgrade';
import { createBusiness } from '../../../services/businesses';
import type { BusinessTier } from '../../../constants/businessTiers';

interface BusinessFormProps {
  onClose: () => void;
  businessData: {
    name: string;
    address: string;
    website?: string;
    phone?: string;
    placeId: string;
  };
}

type FormStep = 'details' | 'upgrade' | 'payment' | 'success';

export default function BusinessForm({ onClose, businessData }: BusinessFormProps) {
  const [step, setStep] = useState<FormStep>('details');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: businessData.phone || '',
    website: businessData.website || '',
    description: '',
    tier: 'ICON' as BusinessTier
  });

  const handleDetailsSubmit = async (data: typeof formData) => {
    setFormData(data);
    setStep('upgrade');
  };

  const handleUpgradeComplete = async (tier: BusinessTier) => {
    try {
      // Create business with selected tier
      await createBusiness({
        businessName: businessData.name,
        firstName: formData.firstName,
        lastName: formData.lastName,
        businessEmail: formData.email,
        phone: formData.phone,
        website: formData.website,
        business_address: businessData.address,
        description: formData.description,
        tier
      });

      if (tier === 'ICON') {
        setStep('success');
      } else {
        setStep('payment');
      }
    } catch (err) {
      console.error('Failed to create business:', err);
      // Handle error
    }
  };

  const handlePaymentComplete = () => {
    setStep('success');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-auto p-8">
        {step === 'details' && (
          <BusinessDetails
            initialData={formData}
            onSubmit={handleDetailsSubmit}
            businessData={businessData}
          />
        )}

        {step === 'upgrade' && (
          <BusinessUpgrade
            business={businessData}
            onComplete={handleUpgradeComplete}
            onSkip={() => handleUpgradeComplete('ICON')}
          />
        )}

        {step === 'payment' && (
          <div>
            {/* Payment form component would go here */}
            <button onClick={handlePaymentComplete}>Complete Payment</button>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center">
            <Building2 className="w-12 h-12 text-patriot-red mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-patriot-navy mb-4">
              Welcome to The Mustard Seed Business Community!
            </h3>
            <p className="text-patriot-blue mb-6">
              Your business has been registered successfully. We look forward to growing together.
            </p>
            <button
              onClick={onClose}
              className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
            >
              View My Business
            </button>
          </div>
        )}
      </div>
    </div>
  );
}