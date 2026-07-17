'use client';

import { useState } from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function EspaceCabinetPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] max-w-md text-center mx-4">
          <CheckCircle className="w-12 h-12 text-[#0A50C9] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#0F172A]">Demande envoyée !</h2>
          <p className="text-gray-600 mt-2">
            Notre équipe vous contactera sous 48h pour finaliser la création de votre compte cabinet.
          </p>
          <Link href="/" className="inline-block mt-6 text-[#0A50C9] hover:underline text-sm">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0]">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-[#0A50C9]" />
            <h1 className="text-3xl font-bold text-[#0F172A]">Créer mon compte cabinet</h1>
          </div>
          <p className="text-gray-600 mb-6">
            Remplissez ce formulaire pour rejoindre le réseau DCMP et gagner en visibilité.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom du cabinet *</label>
              <input type="text" required className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] text-[#0F172A]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ville *</label>
                <input type="text" required className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] text-[#0F172A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pays *</label>
                <input type="text" required className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] text-[#0F172A]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Spécialités (séparées par des virgules) *</label>
              <input type="text" required placeholder="Droit Fiscal, Droit du Travail" className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] text-[#0F172A]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel *</label>
              <input type="email" required className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] text-[#0F172A]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
              <input type="tel" required className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] text-[#0F172A]" />
            </div>
            <button type="submit" className="w-full bg-[#0A50C9] text-white font-semibold py-3 rounded-lg hover:bg-[#003399] transition-all">
              Envoyer ma demande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}