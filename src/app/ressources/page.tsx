'use client';

import { useState } from 'react';
import { Search, BookOpen, GraduationCap, Briefcase, Filter } from 'lucide-react';

// Données mockées – à remplacer par une API
const produits = [
  {
    id: 1,
    titre: 'Code général des impôts annoté',
    categorie: 'Professionnels',
    type: 'Livre numérique',
    prix: '15 000 FCFA',
    auteur: 'Cabinet KOUASSI & Associés',
    image: '/images/livre1.jpg', // optionnel
  },
  {
    id: 2,
    titre: 'Fiches de révision – Droit constitutionnel',
    categorie: 'Étudiants',
    type: 'PDF',
    prix: '3 000 FCFA',
    auteur: 'DCMP Académie',
  },
  {
    id: 3,
    titre: 'Kit de préparation au concours de la magistrature',
    categorie: 'Concours',
    type: 'Pack PDF + QCM',
    prix: '25 000 FCFA',
    auteur: 'DCMP Académie',
  },
  {
    id: 4,
    titre: 'Modèles de contrats OHADA',
    categorie: 'Professionnels',
    type: 'Modèles Word',
    prix: '12 000 FCFA',
    auteur: 'SCP MENSAH & Partners',
  },
  {
    id: 5,
    titre: 'Guide de l\'étudiant en droit – Méthodologie',
    categorie: 'Étudiants',
    type: 'PDF',
    prix: 'Gratuit',
    auteur: 'DCMP Académie',
  },
];

const categories = ['Tous', 'Étudiants', 'Professionnels', 'Concours'];

export default function RessourcesPage() {
  const [filtre, setFiltre] = useState('Tous');
  const [recherche, setRecherche] = useState('');

  const produitsFiltres = produits.filter((p) => {
    const matchCat = filtre === 'Tous' || p.categorie === filtre;
    const matchSearch =
      p.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      p.auteur.toLowerCase().includes(recherche.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-bg-light py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-royal">Librairie & Guides Pratiques</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Téléchargez des ressources juridiques de qualité : livres, modèles de contrats, fiches de révision et kits concours.
          </p>
        </div>

        {/* Barre de recherche & filtres */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une ressource..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filtre === cat
                    ? 'bg-blue-royal text-white'
                    : 'bg-white text-text-dark border border-border-light hover:bg-blue-light'
                }`}
              >
                {cat === 'Tous' ? 'Tous' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de produits */}
        {produitsFiltres.length === 0 ? (
          <p className="text-center text-gray-500">Aucune ressource trouvée.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produitsFiltres.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-xl border border-border-light p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-blue-light rounded-lg">
                    {prod.categorie === 'Étudiants' ? (
                      <GraduationCap className="w-6 h-6 text-blue-royal" />
                    ) : prod.categorie === 'Concours' ? (
                      <Briefcase className="w-6 h-6 text-blue-royal" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-blue-royal" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-blue-royal bg-blue-light px-2 py-0.5 rounded-full">
                      {prod.categorie}
                    </span>
                    <h3 className="font-semibold text-text-dark mt-1">{prod.titre}</h3>
                    <p className="text-sm text-gray-500">{prod.type} • {prod.auteur}</p>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className={`font-bold ${prod.prix === 'Gratuit' ? 'text-green-600' : 'text-gold-cta'}`}>
                    {prod.prix}
                  </span>
                  <button
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      prod.prix === 'Gratuit'
                        ? 'bg-blue-royal text-white hover:bg-blue-dark'
                        : 'bg-gold-cta text-white hover:bg-yellow-600'
                    }`}
                  >
                    {prod.prix === 'Gratuit' ? 'Télécharger' : 'Acheter'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}