import Link from 'next/link';
import { Mic, BookOpen, Building2 } from 'lucide-react';

const pillars = [
  {
    icon: Mic,
    title: 'Benin Legal Summit',
    description:
      'Le rendez-vous annuel des passionnés de droit. Conférences, networking et visibilité internationale.',
    href: '/sommet',
    cta: 'Rejoindre la liste d’attente 2027',
    gradient: 'from-legal-900 to-legal-950',
  },
  {
    icon: BookOpen,
    title: 'Formations & Masterclass',
    description:
      'Maîtrisez le droit, la commande publique et les technologies grâce à des programmes d’élite.',
    href: '/formations',
    cta: 'Voir le catalogue',
    gradient: 'from-legal-900 to-legal-950',
  },
  {
    icon: Building2,
    title: 'Cabinet de Communication Juridique',
    description:
      'Vulgarisation du droit, conseil en stratégie juridique et accompagnement des entreprises.',
    href: '/cabinet',
    cta: 'Découvrir nos services',
    gradient: 'from-legal-900 to-legal-950',
  },
];

export default function Pillars() {
  return (
    <section className="py-24 bg-legal-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,172,47,0.05),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
          Nos <span className="text-gradient-gold">3 piliers</span>
        </h2>
        <p className="text-white/50 text-center max-w-2xl mx-auto mb-16">
          Une plateforme unique pour porter la voix du droit au Bénin et en Afrique.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.href}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b ${pillar.gradient} p-8 transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_0_30px_-10px_rgba(229,172,47,0.3)] flex flex-col`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400/0 via-gold-400/60 to-gold-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <pillar.icon className="w-10 h-10 text-gold-400 mb-6" />
              <h3 className="text-xl font-serif font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">{pillar.description}</p>
              <span className="inline-flex items-center text-gold-400 text-sm font-medium group-hover:gap-2 transition-all">
                {pillar.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}