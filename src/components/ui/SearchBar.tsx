'use client';

import { useRouter } from 'next/navigation';
import { Search, MapPin } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const specialite = (form.elements.namedItem('specialite') as HTMLInputElement).value.trim();
    const zone = (form.elements.namedItem('zone') as HTMLInputElement).value.trim();

    const params = new URLSearchParams();
    if (specialite) params.set('specialite', specialite);
    if (zone) params.set('zone', zone);
    router.push(`/cabinets?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-xl shadow-lg border border-[#E2E8F0] max-w-2xl mx-auto"
    >
      <div className="flex items-center flex-1 bg-[#F8FAFC] rounded-lg px-3 py-2.5 border border-[#E2E8F0]">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          name="specialite"
          placeholder="Spécialité (ex: Fiscalité)..."
          className="w-full bg-transparent text-sm placeholder-gray-400 focus:outline-none"
        />
      </div>
      <div className="flex items-center flex-1 bg-[#F8FAFC] rounded-lg px-3 py-2.5 border border-[#E2E8F0]">
        <MapPin className="w-5 h-5 text-gray-400 mr-2" />
        <input
          name="zone"
          placeholder="Zone (ex: Bénin)..."
          className="w-full bg-transparent text-sm placeholder-gray-400 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-[#0A50C9] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#003399] transition-all flex items-center gap-2"
      >
        <Search className="w-4 h-4" />
        Rechercher
      </button>
    </form>
  );
}