import { Calendar, MapPin } from 'lucide-react';

const events = [
  {
    titre: 'Bénin Legal Summit 2025',
    date: '15-16 Décembre 2025',
    lieu: 'Palais des Congrès, Cotonou',
    description: 'Le rendez-vous annuel des professionnels du droit en Afrique. Conférences, ateliers et networking d’exception.',
    actif: true, // événement en cours d'inscription
  },
  {
    titre: 'Webinaire : Droit OHADA & nouvelles technologies',
    date: '20 Novembre 2025',
    lieu: 'En ligne',
    description: 'Comprendre l’impact des technologies sur le droit des affaires et la pratique contractuelle.',
    actif: true,
  },
  {
    titre: 'Masterclass : Commande publique et contentieux',
    date: '10 Octobre 2025',
    lieu: 'Hôtel Azalaï, Cotonou',
    description: 'Une journée intensive pour maîtriser les procédures de passation des marchés publics.',
    actif: false, // événement passé
  },
];

export default function EvenementsPage() {
  return (
    <div className="min-h-screen bg-bg-light py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-royal text-center mb-4">Événements & Sommets</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Retrouvez tous les événements organisés par DCMP Network : sommets, webinaires, masterclass et rencontres professionnelles.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-border-light shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-blue-royal">{ev.titre}</h2>
                {ev.actif && (
                  <span className="text-xs font-medium bg-gold-cta/10 text-gold-cta px-2 py-1 rounded-full">
                    Inscriptions ouvertes
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {ev.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {ev.lieu}
                </span>
              </div>

              <p className="text-gray-700 text-sm mb-4">{ev.description}</p>

              <a
                href="#"
                className={`inline-block font-semibold text-sm px-4 py-2 rounded-lg transition-colors ${
                  ev.actif
                    ? 'bg-gold-cta text-white hover:bg-yellow-600'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none'
                }`}
              >
                {ev.actif ? 'En savoir plus' : 'Terminé'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}