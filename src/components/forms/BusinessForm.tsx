import React, { useState } from 'react';
import { Building2, Mail } from 'lucide-react';
import { EnrollmentService } from '../../services/enrollments';

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

export default function BusinessForm({ onClose, businessData }: BusinessFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: businessData.phone || '',
    website: businessData.website || '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await EnrollmentService.createBusinessEnrollment({
        businessName: businessData.name,
        firstName: formData.firstName,
        lastName: formData.lastName,
        businessEmail: formData.email,
        phone: formData.phone,
        website: formData.website,
        business_address: businessData.address,
        description: formData.description
      });

      setStep(2);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  if (step === 2) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
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
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-patriot-navy">Complete Your Profile</h2>
            <p className="text-patriot-blue">Join our community of faith-driven businesses</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>

        <div className="bg-patriot-cream rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-patriot-navy">{businessData.name}</h3>
          <p className="text-patriot-blue text-sm">{businessData.address}</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline-block mr-2" />
              Business Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-patriot-red text-white px-6 py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Complete Registration'}
          </button>
        </form>
      </div>
    </div>
  );
}