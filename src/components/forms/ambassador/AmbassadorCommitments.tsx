import React from 'react';
import { Star } from 'lucide-react';

interface AmbassadorCommitmentsProps {
  commitments: string[];
  availableCommitments: string[];
  errors: Record<string, string>;
  onToggle: (commitment: string) => void;
}

export default function AmbassadorCommitments({ 
  commitments, 
  availableCommitments,
  errors, 
  onToggle 
}: AmbassadorCommitmentsProps) {
  return (
    <div>
      <div className="space-y-3">
        {availableCommitments.map((commitment, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onToggle(commitment)}
            className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${
              commitments.includes(commitment)
                ? 'border-patriot-red bg-patriot-cream'
                : 'border-gray-200 hover:border-patriot-red hover:bg-patriot-cream/50'
            }`}
          >
            <span className="text-patriot-navy">{commitment}</span>
            {commitments.includes(commitment) && (
              <Star className="w-5 h-5 text-patriot-red" />
            )}
          </button>
        ))}
      </div>
      {errors.commitments && (
        <p className="mt-2 text-sm text-red-600">{errors.commitments}</p>
      )}
    </div>
  );
}