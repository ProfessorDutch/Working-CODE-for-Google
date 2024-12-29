import React, { useState } from 'react';
import { Building2, Mail, Phone } from 'lucide-react';
import GoogleSignIn from './GoogleSignIn';
import VerificationStep from './VerificationStep';
import UpgradeOffer from './UpgradeOffer';

type ClaimStep = 'verify' | 'contact' | 'upgrade' | 'success';

export default function ClaimBusinessFlow({ business, onClose }: { 
  business: any;
  onClose: () => void;
}) {
  const [step, setStep] = useState<ClaimStep>('verify');
  const [verificationMethod, setVerificationMethod] = useState<'google' | 'phone' | null>(null);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      {step === 'verify' && (
        <div className="space-y-6">
          <div className="text-center">
            <Building2 className="w-12 h-12 text-patriot-red mx-auto mb-4" />
            <h3 className="text-xl font-bold text-patriot-navy mb-2">
              Verify {business.name}
            </h3>
            <p className="text-patriot-blue mb-6">
              Choose how you'd like to verify your business ownership
            </p>
          </div>

          <div className="space-y-4">
            <GoogleSignIn 
              onSuccess={() => setStep('contact')}
              businessName={business.name}
            />
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or verify with</span>
              </div>
            </div>

            <button
              onClick={() => {
                setVerificationMethod('phone');
                setStep('contact');
              }}
              className="w-full flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-lg hover:border-patriot-red hover:bg-patriot-cream transition-colors"
            >
              <Phone className="w-5 h-5 text-patriot-red" />
              <span>Phone Verification</span>
            </button>
          </div>
        </div>
      )}

      {step === 'contact' && (
        <VerificationStep
          method={verificationMethod}
          business={business}
          onComplete={() => setStep('upgrade')}
          onBack={() => setStep('verify')}
        />
      )}

      {step === 'upgrade' && (
        <UpgradeOffer
          business={business}
          onComplete={() => setStep('success')}
          onSkip={() => setStep('success')}
        />
      )}

      {step === 'success' && (
        <div className="text-center">
          <Building2 className="w-12 h-12 text-patriot-red mx-auto mb-4" />
          <h3 className="text-xl font-bold text-patriot-navy mb-2">
            Business Claimed Successfully!
          </h3>
          <p className="text-patriot-blue mb-6">
            You can now manage your business listing and connect with the community.
          </p>
          <button
            onClick={onClose}
            className="bg-patriot-red text-white px-6 py-2 rounded-full hover:bg-patriot-crimson transition-colors"
          >
            View My Business
          </button>
        </div>
      )}
    </div>
  );
}