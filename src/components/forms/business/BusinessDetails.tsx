import React from 'react';
import { Mail, Globe } from 'lucide-react';

interface BusinessDetailsProps {
  initialData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    website: string;
  };
  onSubmit: (data: BusinessDetailsProps['initialData']) => void;
  businessData: {
    name: string;
    address: string;
    website?: string;
    phone?: string;
  };
}

export default function BusinessDetails({ 
  initialData, 
  onSubmit,
  businessData
}: BusinessDetailsProps) {
  const [formData, setFormData] = React.useState({
    ...initialData,
    website: businessData.website || initialData.website,
    phone: businessData.phone || initialData.phone
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-patriot-cream rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-patriot-navy mb-2">{businessData.name}</h3>
        <p className="text-patriot-blue text-sm">{businessData.address}</p>
      </div>

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

      {businessData.website && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm text-patriot-blue">
            <Globe className="w-4 h-4" />
            <a 
              href={businessData.website.startsWith('http') ? businessData.website : `https://${businessData.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-patriot-red transition-colors"
            >
              {businessData.website}
            </a>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-patriot-red text-white py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors"
      >
        Continue
      </button>
    </form>
  );
}