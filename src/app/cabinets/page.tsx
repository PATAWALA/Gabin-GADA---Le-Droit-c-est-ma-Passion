'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, MapPin, Tag, ArrowRight } from 'lucide-react';

const allCabinets = [
  { nom: 'Cabinet KOUASSI & Associés', specialites: ['Droit Fiscal', 'Droit des Affaires'], ville: 'Cotonou', pays: 'Bénin', id: 'kouassi' },
  { nom: 'Cabinet ADOTEVI', specialites: ['Droit du Travail'], ville: 'Lomé', pays: 'Togo', id: 'adotevi' },
  { nom: 'SCP MENSAH & Partners', specialites: ['Droit OHADA'], ville: 'Abidjan', pays: 'Côte d’Ivoire', id: 'mensah' },
  { nom: 'Cabinet DIALLO Conseil', specialites: ['Droit Commercial'], ville: 'Dakar', pays: 'Sénégal', id: 'diallo' },
  { nom: 'Etude BOKO & Frères', specialites: ['Droit Pénal'], ville: 'Cotonou', pays: 'Bénin', id: 'boko' },
  { nom: 'Cabinet EKUE', specialites: ['Sécurité Sociale'], ville: 'Lomé', pays: 'Togo', id: 'ekue' },
];

function CabinetsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialSpecialite = searchParams.get('specialite') || '';
  const initialZone = searchParams.get('zone') || '';

  const [specialite, setSpecialite] = useState(initialSpecialite);
  const [zone, setZone] = useState(initialZone);

  const filtered = allCabinets.filter((cab) => {
    const matchSpecialite = !specialite || cab.specialites.some((s) => s.toLowerCase().includes(specialite.toLowerCase()));
    const matchZone = !zone || cab.ville.toLowerCase().includes(zone.toLowerCase()) || cab.pays.toLowerCase().includes(zone.toLowerCase());
    return matchSpecialite && matchZone;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (specialite) params.set('specialite', specialite);
    if (zone) params.set('zone', zone);
    router.push(`/cabinets?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0F172A]">Trouver un cabinet</h1>
          <p className="mt-4 text-gray-600">Filtrer par spécialité et zone géographique.</p>
        </div>

        {/* Barre de recherche */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-xl shadow-lg border border-[#E2E8F0] max-w-2xl mx-auto mb-10">
          <div className="flex items-center flex-1 bg-[#F8FAFC] rounded-lg px-3 py-2.5 border border-[#E2E8F0]">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              value={specialite}
              onChange={(e) => setSpecialite(e.target.value)}
              placeholder="Spécialité (ex: Fiscalité)..."
              className="w-full bg-transparent text-sm placeholder-gray-400 focus:outline-none text-[#0F172A]"
            />
          </div>
          <div className="flex items-center flex-1 bg-[#F8FAFC] rounded-lg px-3 py-2.5 border border-[#E2E8F0]">
            <MapPin className="w-5 h-5 text-gray-400 mr-2" />
            <input
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              placeholder="Zone (ex: Bénin)..."
              className="w-full bg-transparent text-sm placeholder-gray-400 focus:outline-none text-[#0F172A]"
            />
          </div>
          <button type="submit" className="bg-[#0A50C9] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#003399] transition-all flex items-center gap-2">
            <Search className="w-4 h-4" /> Rechercher
          </button>
        </form>

        {/* Résultats */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">Aucun cabinet trouvé.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((cabinet) => (
              <div key={cabinet.id} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E8F0FE] text-[#0A50C9] rounded-full flex items-center justify-center font-bold text-lg">
                    {cabinet.nom.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">{cabinet.nom}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {cabinet.ville}, {cabinet.pays}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cabinet.specialites.map((spec) => (
                    <span key={spec} className="px-3 py-1 text-xs font-medium bg-[#E8F0FE] text-[#003399] rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/cabinets/${cabinet.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#0A50C9] text-[#0A50C9] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A50C9] hover:text-white transition-all"
                  >
                    Voir le profil <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CabinetsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Chargement...</div>}>
      <CabinetsContent />
    </Suspense>
  );
}