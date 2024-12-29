import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import DirectoryWelcome from '../components/directory/DirectoryWelcome';
import DirectoryTiers from '../components/directory/DirectoryTiers';

export default function BusinessDirectoryPreview() {
  return (
    <main className="flex-1 bg-gradient-to-br from-patriot-cream to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Building2 className="w-16 h-16 text-patriot-red mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-patriot-navy mb-4">
            Business Directory
          </h1>
          <p className="text-xl text-patriot-blue max-w-2xl mx-auto">
            Choose how you'd like your business to appear in our faith-driven community
          </p>
        </div>

        {/* Welcome Section */}
        <DirectoryWelcome />

        {/* Listing Tiers */}
        <DirectoryTiers />

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors inline-flex items-center gap-2">
            Join Our Directory <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}