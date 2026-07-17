'use client';

import { useState } from 'react';
import { Calendar, MapPin, Send, CheckCircle } from 'lucide-react';

export default function SommetPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          Benin Legal <span className="text-[#0A50C9]">Summit</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Le rendez-vous annuel des professionnels du droit en Afrique. Conférences, ateliers et networking d’exception.
        </p>

        <div className="flex justify-center gap-8 mt-8 text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#0A50C9]" />
            <span>15-16 Décembre 2027</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#0A50C9]" />
            <span>Palais des Congrès, Cotonou</span>
          </div>
        </div>

        <div className="mt-12 max-w-md mx-auto">
          {status === 'success' ? (
            <div className="bg-[#E8F0FE] text-[#003399] p-6 rounded-xl text-center">
              <CheckCircle className="w-10 h-10 mx-auto mb-2" />
              <p className="font-semibold">Vous êtes sur la liste d’attente !</p>
              <p className="text-sm mt-1">Vous serez informé dès l’ouverture des inscriptions.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2.5 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] text-[#0F172A]"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#0A50C9] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#003399] transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Envoi...' : 'Rejoindre'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}