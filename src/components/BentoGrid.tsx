import { BookOpen, Mic, Building2, Scale, ShieldCheck, GraduationCap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Mic,
    title: 'Benin Legal Summit',
    description: 'L’événement juridique de référence en Afrique de l’Ouest, vitrine annuelle du Cabinet DCMP.',
    col: 'md:col-span-2 md:row-span-2',
    href: '/sommet',
    accent: 'from-gold-500/20 to-legal-900',
    highlight: 'Édition 2027',
  },
  {
    icon: BookOpen,
    title: 'Formations & Masterclass',
    description: 'Droit, commande publique, technologies : des programmes certifiants pour monter en compétence.',
    col: '',
    href: '/formations',
    accent: 'from-gold-400/10 to-legal-900',
  },
  {
    icon: Building2,
    title: 'Communication Juridique',
    description: 'Conseil en stratégie de communication, vulgarisation du droit et conformité pour les entreprises.',
    col: '',
    href: '/cabinet',
    accent: 'from-gold-300/10 to-legal-900',
  },
  {
    icon: ShieldCheck,
    title: 'Défense Pénale',
    description: 'Défense rigoureuse et discrète devant toutes les juridictions béninoises.',
    col: 'md:col-span-2',
    href: '#',
    accent: 'from-gold-500/10 to-legal-900',
  },
  {
    icon: Scale,
    title: 'Consultations & Actes',
    description: 'Rédaction d’actes, contentieux des affaires et conseil juridique personnalisé.',
    col: '',
    href: '#',
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
            Le Cabinet DCMP réunit l’événementiel juridique, la formation d’élite et l’accompagnement stratégique des entreprises, sous la direction de Gabin GADA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br ${service.accent} p-8 transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_0_30px_-10px_rgba(229,172,47,0.3)] ${service.col} cursor-pointer`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex items-start gap-2">
                    <h3 className="text-xl font-serif font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    {service.highlight && (
                      <span className="text-xs font-semibold bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full mt-0.5">
                        {service.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gold-400 self-end mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}