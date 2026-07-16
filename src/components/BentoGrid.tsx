import { BookOpen, Briefcase, Shield, FileText, Award, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: BookOpen,
    title: 'Consultation Juridique',
    description: 'Analyse approfondie de vos problématiques et stratégie sur mesure.',
    col: 'md:col-span-2 md:row-span-2',
    accent: 'from-gold-500/20 to-legal-900',
  },
  {
    icon: Briefcase,
    title: 'Droit des Affaires',
    description: 'Accompagnement des entreprises dans leurs opérations et contentieux.',
    col: '',
    accent: 'from-gold-400/10 to-legal-900',
  },
  {
    icon: Shield,
    title: 'Défense Pénale',
    description: 'Défense rigoureuse et discrète devant toutes les juridictions.',
    col: '',
    accent: 'from-gold-300/10 to-legal-900',
  },
  {
    icon: FileText,
    title: 'Rédaction d’Actes',
    description: 'Contrats, statuts, baux… des actes solides et personnalisés.',
    col: 'md:col-span-2',
    accent: 'from-gold-500/10 to-legal-900',
  },
  {
    icon: Award,
    title: 'Formations & Sommets',
    description: 'Transmission du savoir et mise en réseau des acteurs du droit.',
    col: '',
    accent: 'from-gold-600/10 to-legal-900',
  },
];

export default function BentoGrid() {
  return (
    <section className="relative py-24 bg-legal-950" id="services">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,172,47,0.08),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Une <span className="text-gradient-gold">expertise</span> plurielle
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Gabin GADA met à votre service une maîtrise complète du droit, au croisement
            de la tradition civiliste et des enjeux contemporains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={index === services.length - 1 ? '/formations' : '#'}
              className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br ${service.accent} p-8 transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_0_30px_-10px_rgba(229,172,47,0.3)] ${service.col}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gold-400 self-end mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
              </div>
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}