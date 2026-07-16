import { Metadata } from 'next';
import { BookOpen, Clock, Users, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Formations & Masterclass | Gabin GADA',
  description: 'Formez-vous au droit, à la commande publique et aux nouvelles technologies.',
};

const formations = [
  {
    title: 'Initiation au Droit OHADA',
    desc: 'Comprendre les fondamentaux du droit des affaires en Afrique.',
    duration: '8 semaines',
    level: 'Débutant',
    audience: 'Étudiants, jeunes pros',
    price: '50 000 FCFA',
    rating: 4.8,
  },
  {
    title: 'Maîtrise de la Commande Publique',
    desc: 'Appels d’offres, passation, contentieux : une expertise clé.',
    duration: '6 semaines',
    level: 'Intermédiaire',
    audience: 'Juristes, chefs d’entreprise',
    price: '75 000 FCFA',
    rating: 4.9,
  },
  {
    title: 'Droit & Nouvelles Technologies',
    desc: 'RGPD, contrats IT, blockchain : sécurisez l’innovation.',
    duration: '10 semaines',
    level: 'Avancé',
    audience: 'Juristes IT, DPO',
    price: '90 000 FCFA',
    rating: 4.7,
  },
];

export default function FormationsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-legal-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,172,47,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Formations <span className="text-gradient-gold">& Masterclass</span>
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Des programmes d’excellence pour maîtriser le droit, la commande publique et les nouvelles technologies.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {formations.map((f, i) => (
          <div
            key={i}
            className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-gold-500/20 transition-all duration-500 flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <BookOpen className="w-6 h-6 text-gold-400" />
              <span className="text-xs bg-gold-500/10 text-gold-400 px-2 py-1 rounded-full">{f.level}</span>
            </div>
            <h3 className="text-lg font-serif font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-white/50 text-sm mb-4 flex-1">{f.desc}</p>
            <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{f.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" />{f.audience}</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-400" />{f.rating}</span>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-bold text-gold-400">{f.price}</span>
              <Link
                href={`/formations/checkout?formation=${encodeURIComponent(f.title)}`}
                className="inline-flex items-center gap-1 text-sm font-medium bg-gold-500 text-legal-950 px-4 py-2 rounded-lg hover:bg-gold-400 transition-all"
              >
                S’inscrire
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}