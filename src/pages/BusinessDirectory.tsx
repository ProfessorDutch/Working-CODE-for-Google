import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { usePlacesSearch } from '../hooks/places/usePlacesSearch';
import BusinessList from '../components/directory/BusinessList';
import SearchForm from '../components/directory/SearchForm';

export default function BusinessDirectory() {
  const { search, loading, error, isLoaded } = usePlacesSearch();
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = async (query: string) => {
    const results = await search(query);
    setBusinesses(results);
  };

  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-12 h-12 text-patriot-red" />
            <div>
              <h1 className="text-4xl font-bold text-patriot-navy">Business Directory</h1>
              <p className="text-xl text-patriot-blue">Find and connect with faith-driven businesses</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <SearchForm onSubmit={handleSearch} disabled={!isLoaded || loading} />
            {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          </div>

          <BusinessList businesses={businesses} loading={loading} />
        </div>
      </section>
    </main>
  );
}