import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSubmit: (query: string) => void;
  disabled?: boolean;
}

export default function SearchForm({ onSubmit, disabled }: SearchFormProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by business name or location"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          disabled={disabled}
        />
      </div>

      <button
        type="submit"
        disabled={disabled || !query.trim()}
        className="px-8 py-2 bg-patriot-red text-white rounded-full hover:bg-patriot-crimson transition-colors disabled:opacity-50"
      >
        Search
      </button>
    </form>
  );
}