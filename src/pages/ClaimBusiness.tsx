import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import BusinessSearch from '../components/directory/BusinessSearch';
import BusinessForm from '../components/forms/business/BusinessForm';

interface SelectedBusiness {
  name: string;
  address: string;
  website?: string;
  phone?: string;
  placeId: string;
}

export default function ClaimBusiness() {
  const [selectedBusiness, setSelectedBusiness] = useState<SelectedBusiness | null>(null);

  const handleBusinessSelect = (business: SelectedBusiness) => {
    console.log('Selected business:', business);
    setSelectedBusiness(business);
  };

  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-12 h-12 text-patriot-red" />
            <div>
              <h1 className="text-4xl font-bold text-patriot-navy">Claim Your Business</h1>
              <p className="text-xl text-patriot-blue">Join our community of faith-driven businesses</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {!selectedBusiness ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-patriot-navy mb-4">Find Your Business</h2>
                  <p className="text-patriot-blue">
                    Search for your business to begin the claiming process
                  </p>
                </div>
                <BusinessSearch onSelect={handleBusinessSelect} />
              </>
            ) : (
              <BusinessForm 
                businessData={selectedBusiness}
                onClose={() => setSelectedBusiness(null)}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}