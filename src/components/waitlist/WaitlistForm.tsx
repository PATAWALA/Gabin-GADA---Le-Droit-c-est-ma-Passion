'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulation d’envoi à une API Supabase plus tard
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 bg-gold-500/10 border border-gold-500/30 rounded-xl p-8 max-w-md mx-auto">
        <CheckCircle className="w-12 h-12 text-gold-400" />
        <p className="text-white font-serif text-lg">Merci {name || 'de votre intérêt'} !</p>
        <p className="text-white/60 text-sm text-center">
          Vous êtes désormais sur la liste d’attente pour le Benin Legal Summit 2027. Vous recevrez toutes les informations en avant-première.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors"
      />
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-legal-950 font-semibold px-6 py-3 rounded-lg transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'Envoi...' : 'Rejoindre'}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}