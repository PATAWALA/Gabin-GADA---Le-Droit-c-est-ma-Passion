import { Calendar, MapPin, Mic, Users } from 'lucide-react';

const moments = [
  {
    icon: Mic,
    title: 'Conférence inaugurale',
    description: '« Le droit face aux défis numériques en Afrique » par Gabin GADA, devant 500 participants.',
    date: 'Édition 2024',
    lieu: 'Palais des Congrès, Cotonou',
  },
  {
    icon: Users,
    title: 'Panel international',
    description: 'Échanges entre magistrats, avocats et universitaires venus de 12 pays africains.',
    date: 'Édition 2024',
    lieu: 'Salle de la Cour d’Appel',
  },
  {
    icon: Calendar,
    title: 'Atelier pratique',
    description: 'Rédaction de contrats OHADA : cas concrets et simulations interactives.',
    date: 'Édition 2023',
    lieu: 'Hôtel Azalaï, Cotonou',
  },
  {
    icon: MapPin,
    title: 'Soirée de Gala du Droit',
    description: 'Remise des prix de l’excellence juridique béninoise et networking de prestige.',
    date: 'Édition 2023',
    lieu: 'Palais de la Marina',
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-legal-950 relative overflow-hidden" id="gallery">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(229,172,47,0.05),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Benin Legal <span className="text-gradient-gold">Summit</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Retour sur les moments marquants du rendez-vous annuel des passionnés de droit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold-500/20 hover:bg-gold-500/[0.03] hover:shadow-[0_0_40px_-15px_rgba(229,172,47,0.2)]"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400/0 via-gold-400/60 to-gold-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <moment.icon className="w-10 h-10 text-gold-400 mb-6" />
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                {moment.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {moment.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <Calendar className="w-3 h-3" />
                <span>{moment.date}</span>
                <span className="mx-1">•</span>
                <MapPin className="w-3 h-3" />
                <span>{moment.lieu}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}