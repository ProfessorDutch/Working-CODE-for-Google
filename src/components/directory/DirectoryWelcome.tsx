import React from 'react';
import { Sprout } from 'lucide-react';

export default function DirectoryWelcome() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex items-center gap-4">
      <Sprout className="w-6 h-6 text-green-600 flex-shrink-0" />
      <div className="flex-1 text-sm">
        <span className="text-patriot-navy font-medium">Free Icon Listing included: </span>
        <span className="text-patriot-gray">Business name, location, and green Mustard Seed icon. </span>
        <span className="text-patriot-blue">Want to stand out? Explore enhanced options below.</span>
      </div>
    </div>
  );
}