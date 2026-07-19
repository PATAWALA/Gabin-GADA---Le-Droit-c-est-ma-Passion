import { GraduationCap, BookOpen, FileText, Users, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const concours = [
  {
    id: 1,
    titre: 'Concours de la Magistrature',
    description: 'Préparez-vous efficacement aux épreuves d’admissibilité et d’admission.',
    nbFiches: 24,
    prix: '25 000 FCFA',
    image: '/images/concours-magistrat.jpg', // facultatif
    lien: '/ressources/concours/magistrature',
  },
  {
    id: 2,
    titre: 'Concours du Barreau',
    description: 'Fiches de révision, cas pratiques et annales corrigées.',
    nbFiches: 18,
    prix: '20 000 FCFA',
    lien: '/ressources/concours/barreau',
  },
  {
    id: 3,
    titre: 'Concours de Greffier',
    description: 'Kit complet pour réussir le concours de greffier en chef.',
    nbFiches: 15,
    prix: '18 000 FCFA',
    lien: '/ressources/concours/greffier',
  },
];

const guidesEtudiants = [
  {
    id: 1,
    titre: 'Guide de méthodologie juridique',
    type: 'PDF',
    prix: 'Gratuit',
  },
  {
    id: 2,
    titre: 'Fiches de révision – Droit constitutionnel',
    type: 'PDF',
    prix: '3 000 FCFA',
  },
  {
    id: 3,
    titre: 'Fiches de révision – Droit administratif',
    type: 'PDF',
    prix: '3 000 FCFA',
  },
  {
    id: 4,
    titre: 'Mémento des libertés fondamentales',
    type: 'PDF',
    prix: '5 000 FCFA',
  },
];

export default function EspaceEtudiantsPage() {
  return (
    <div className="min-h-screen bg-bg-light py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-royal">Espace Étudiants</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Préparez vos concours, accédez à des guides de méthodologie et des fiches de révision conçues par des professionnels du droit.
          </p>
        </div>

        {/* Section Concours */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-royal flex items-center gap-2 mb-6">
            <Users className="w-6 h-6" />
            Kits Concours
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concours.map((conc) => (
              <div
                key={conc.id}
                className="bg-white border border-border-light rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-light text-blue-royal rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark">{conc.titre}</h3>
                    <p className="text-sm text-gray-500 mt-1">{conc.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{conc.nbFiches} fiches</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-bold text-gold-cta">{conc.prix}</span>
                  <Link
                    href={conc.lien}
                    className="inline-flex items-center gap-1 bg-gold-cta text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-colors"
                  >
                    Voir le kit <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Guides & Fiches */}
        <section>
          <h2 className="text-2xl font-bold text-blue-royal flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6" />
            Guides & Fiches de révision
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidesEtudiants.map((guide) => (
              <div
                key={guide.id}
                className="bg-white border border-border-light rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <GraduationCap className="w-8 h-8 text-blue-royal mb-3" />
                <h3 className="font-semibold text-text-dark text-sm">{guide.titre}</h3>
                <p className="text-xs text-gray-500 mt-1">{guide.type}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`font-bold text-sm ${guide.prix === 'Gratuit' ? 'text-green-600' : 'text-gold-cta'}`}>
                    {guide.prix}
                  </span>
                  <button
                    className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                      guide.prix === 'Gratuit'
                        ? 'bg-blue-royal text-white hover:bg-blue-dark'
                        : 'bg-gold-cta text-white hover:bg-yellow-600'
                    }`}
                  >
                    {guide.prix === 'Gratuit' ? 'Télécharger' : 'Acheter'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}