'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building2 } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'un appel API (à remplacer par votre logique Supabase, etc.)
    setTimeout(() => {
      router.push('/auth/register/success');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-sm border border-border-light">
        <div className="text-center mb-8">
          <Building2 className="w-12 h-12 text-blue-royal mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-blue-royal">Inscrire mon cabinet</h1>
          <p className="text-gray-600 mt-2">
            Rejoignez le réseau DCMP et boostez votre visibilité.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-dark mb-1">
              Nom du cabinet *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">
                Ville *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">
                Pays *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-dark mb-1">
              Spécialités (séparées par des virgules) *
            </label>
            <input
              type="text"
              required
              placeholder="Droit Fiscal, Droit des Affaires"
              className="w-full px-4 py-2.5 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-dark mb-1">
              Email professionnel *
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-dark mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2.5 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold-cta text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-70"
          >
            {loading ? 'Envoi en cours...' : 'Valider mon inscription'}
          </button>
        </form>
      </div>
    </div>
  );
}