import React from 'react';
import { Search } from 'lucide-react';

interface BusinessSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function BusinessSearchInput({ value, onChange, placeholder = "Search by business name" }: BusinessSearchInputProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
      />
    </div>
  );
}