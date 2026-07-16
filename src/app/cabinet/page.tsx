import { Metadata } from 'next';
import { Building2, Megaphone, FileText, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cabinet de Communication Juridique | Gabin GADA',
  description: 'Vulgarisation du droit, stratégie juridique et accompagnement sur mesure pour les entreprises.',
};

const services = [
  {
    icon: Megaphone,
    title: 'Vulgarisation juridique',
    desc: 'Nous traduisons le droit en langage clair pour vos équipes, clients et partenaires.',
  },
  {
    icon: FileText,
    title: 'Stratégie de communication judiciaire',
    desc: 'Accompagnement dans la gestion de votre image lors de procédures médiatisées.',
  },
  {
    icon: Building2,
    title: 'Conseil en stratégie juridique',
    desc: 'Nous intégrons les enjeux juridiques dans votre stratégie d’entreprise.',
  },
  {
    icon: Scale,
    title: 'Audit & mise en conformité',
    desc: 'Diagnostic complet de votre communication externe au regard du droit.',
  },
];

export default function CabinetPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-legal-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,172,47,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Cabinet de <span className="text-gradient-gold">Communication Juridique</span>
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto mb-10">
            Nous aidons les entreprises à maîtriser leur discours juridique, à prévenir les risques d’image et à valoriser leur conformité.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-legal-950 font-semibold px-8 py-4 rounded-lg transition-all"
          >
            Demander un audit gratuit
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-gold-500/20 transition-all duration-500"
          >
            <s.icon className="w-8 h-8 text-gold-400 mb-4" />
            <h3 className="text-xl font-serif font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-white/50 text-sm">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* Formulaire de contact (optionnel) */}
      <section id="contact" className="max-w-xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif font-bold text-white mb-6 text-center">
          Contactez-nous
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-400"
          />
          <input
            type="email"
            placeholder="Email professionnel"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-400"
          />
          <textarea
            placeholder="Votre message"
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-400"
          />
          <button
            type="submit"
            className="w-full bg-gold-500 hover:bg-gold-400 text-legal-950 font-semibold py-3 rounded-lg transition-all"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}