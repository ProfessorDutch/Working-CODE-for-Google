import React from 'react';
import { Sprout } from 'lucide-react';

export default function DirectoryIntro() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
      <div className="flex items-start gap-4">
        <Sprout className="w-8 h-8 text-green-600 flex-shrink-0" />
        <div>
          <h2 className="text-xl font-bold text-patriot-navy mb-2">Faith-Driven Business Community</h2>
          <p className="text-patriot-blue mb-4">
            Connect with businesses that share your values and support youth ministry through The Mustard Seed movement. 
            Look for the green Mustard Seed icon <Sprout className="w-4 h-4 text-green-600 inline-block mx-1" /> 
            to identify member businesses committed to our mission.
          </p>
          <div className="bg-patriot-cream rounded-lg p-4">
            <h3 className="font-semibold text-patriot-navy mb-2">Member Benefits Include:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                <span className="text-sm text-patriot-gray">Enhanced visibility in search results</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                <span className="text-sm text-patriot-gray">Connection to faith-based customers</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                <span className="text-sm text-patriot-gray">Support youth ministry initiatives</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                <span className="text-sm text-patriot-gray">Community networking opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}