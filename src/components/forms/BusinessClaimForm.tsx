import React, { useState } from 'react';
import { Building2, ArrowRight } from 'lucide-react';

interface BusinessClaimFormProps {
  onClose: () => void;
  selectedBusiness: {
    name: string;
    address: string;
    phone?: string;
    website?: string;
    placeId: string;
  };
}

export default function BusinessClaimForm({ onClose, selectedBusiness }: BusinessClaimFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, business: selectedBusiness });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold text-patriot-navy">Complete Your Profile</h2>
            <p className="text-patriot-blue mt-1">Join our community of faith-driven businesses</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>

        {/* Business Info Preview */}
        <div className="bg-patriot-cream rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-patriot-navy">{selectedBusiness.name}</h3>
          <p className="text-patriot-blue text-sm">{selectedBusiness.address}</p>
          {selectedBusiness.phone && (
            <p className="text-patriot-blue text-sm mt-1">{selectedBusiness.phone}</p>
          )}
          {selectedBusiness.website && (
            <a 
              href={selectedBusiness.website}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-patriot-blue text-sm hover:text-patriot-red mt-1 block"
            >
              {selectedBusiness.website}
            </a>
          )}
        </div>

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

          <button
            type="submit"
            className="w-full bg-patriot-red text-white px-6 py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors flex items-center justify-center gap-2"
          >
            Complete Registration <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}