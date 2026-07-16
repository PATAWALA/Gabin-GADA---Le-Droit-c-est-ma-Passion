import { Metadata } from 'next';
import { Calendar, MapPin, Mic, Users, Award } from 'lucide-react';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import GalleryEditions from '@/components/GalleryEditions';

export const metadata: Metadata = {
  title: 'Benin Legal Summit 2027 | Gabin GADA',
  description:
    'Inscrivez-vous sur liste d’attente pour la prochaine édition du Benin Legal Summit. Revivez les moments des éditions précédentes.',
};

// Données des moments forts (texte)
const editions = [
  {
    icon: Mic,
    title: 'Conférence inaugurale',
    description:
      '« Le droit face aux défis numériques en Afrique » par Gabin GADA, devant 500 participants.',
    date: 'Édition 2024',
  },
  {
    icon: Users,
    title: 'Panel international',
    description:
      'Échanges entre magistrats, avocats et universitaires venus de 12 pays africains.',
    date: 'Édition 2024',
  },
  {
    icon: Award,
    title: 'Prix de l’Excellence Juridique',
    description: 'Récompense des acteurs majeurs du droit béninois.',
    date: 'Édition 2023',
  },
  {
    icon: MapPin,
    title: 'Atelier OHADA',
    description: 'Rédaction de contrats et contentieux des affaires.',
    date: 'Édition 2023',
  },
  {
    icon: Calendar,
    title: 'Soirée de Gala',
    description: 'Networking de prestige au Palais de la Marina.',
    date: 'Édition 2022',
  },
];

export default function SommetPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-legal-950">
      {/* Hero du Summit */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,172,47,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Benin Legal <span className="text-gradient-gold">Summit</span>
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto mb-6">
            L’événement juridique de référence en Afrique de l’Ouest. Conférences, ateliers et networking d’exception.
          </p>
          <p className="text-white/40 mb-10">
            Prochaine édition : <span className="text-gold-400">2027</span> – Inscrivez-vous sur liste d’attente pour être informé en avant-première.
          </p>

          {/* Formulaire d’attente */}
          <WaitlistForm />
        </div>
      </section>

      {/* Galerie photos des éditions 2025 & 2026 */}
      <GalleryEditions />

      {/* Moments forts (texte) */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">
          Moments <span className="text-gradient-gold">phares</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {editions.map((edition, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-gold-500/20 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(229,172,47,0.15)]"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400/0 via-gold-400/60 to-gold-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <edition.icon className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="text-xl font-serif font-semibold text-white mb-2">
                {edition.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {edition.description}
              </p>
              <p className="text-xs text-gold-400/80">{edition.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partenaires officiels */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
          Partenaires <span className="text-gradient-gold">officiels</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
          <span className="text-white/50 text-lg font-semibold">FAGACE</span>
          <span className="text-white/50 text-lg font-semibold">FeexPay</span>
          <span className="text-white/50 text-lg font-semibold">Barreau du Bénin</span>
          <span className="text-white/50 text-lg font-semibold">OHADA</span>
        </div>
      </section>
    </main>
  );
}