'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [specialite, setSpecialite] = useState('');
  const [ville, setVille] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (specialite) params.set('specialite', specialite);
    if (ville) params.set('ville', ville);
    router.push(`/cabinets?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-2 rounded-xl shadow-lg border border-border-light flex flex-col sm:flex-row gap-2">
      <div className="flex-1 flex items-center border border-border-light rounded-lg px-3 py-2.5 bg-bg-light">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Spécialité (ex: Fiscalité)"
          value={specialite}
          onChange={(e) => setSpecialite(e.target.value)}
          className="bg-transparent w-full text-sm focus:outline-none"
        />
      </div>
      <div className="flex-1 flex items-center border border-border-light rounded-lg px-3 py-2.5 bg-bg-light">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Ville (ex: Cotonou)"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          className="bg-transparent w-full text-sm focus:outline-none"
        />
      </div>
      <button type="submit" className="bg-blue-royal text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-dark transition-colors flex items-center gap-2">
        <Search className="w-4 h-4" />
        Rechercher
      </button>
    </form>
  );
}