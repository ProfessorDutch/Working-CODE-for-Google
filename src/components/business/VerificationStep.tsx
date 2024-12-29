import React, { useState } from 'react';
import { ArrowLeft, Phone } from 'lucide-react';

export default function VerificationStep({
  method,
  business,
  onComplete,
  onBack
}: {
  method: 'google' | 'phone' | null;
  business: any;
  onComplete: () => void;
  onBack: () => void;
}) {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const handleSendCode = () => {
    // Here you would integrate with your SMS service
    setCodeSent(true);
  };

  const handleVerify = () => {
    // Here you would verify the code
    onComplete();
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-patriot-blue hover:text-patriot-red transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="text-center">
        <Phone className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h3 className="text-xl font-bold text-patriot-navy mb-2">
          Verify Your Business
        </h3>
        <p className="text-patriot-blue mb-6">
          We'll send a verification code to your business phone
        </p>
      </div>

      {!codeSent ? (
        <div className="space-y-4">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter business phone number"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          />
          <button
            onClick={handleSendCode}
            disabled={!phone}
            className="w-full bg-patriot-red text-white py-2 rounded-full font-medium hover:bg-patriot-crimson transition-colors disabled:opacity-50"
          >
            Send Verification Code
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter verification code"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          />
          <button
            onClick={handleVerify}
            disabled={!code}
            className="w-full bg-patriot-red text-white py-2 rounded-full font-medium hover:bg-patriot-crimson transition-colors disabled:opacity-50"
          >
            Verify Code
          </button>
        </div>
      )}
    </div>
  );
}