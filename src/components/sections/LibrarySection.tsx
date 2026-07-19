import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'Réussir son contrôle fiscal',
    category: 'Guide pratique',
    price: '10 000 FCFA',
    image: '/images/guide-fiscal.jpg', // optionnel, sinon retirer la balise <img>
  },
  {
    id: 2,
    title: 'Modèles de contrats commerciaux',
    category: 'Modèles',
    price: '5 000 FCFA',
  },
  {
    id: 3,
    title: 'Guide du droit du travail',
    category: 'Guide pratique',
    price: 'Gratuit',
  },
  {
    id: 4,
    title: 'Kit de création d’entreprise',
    category: 'Pack',
    price: '15 000 FCFA',
  },
];

export default function LibrarySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-royal">Outils & Guides Pratiques</h2>
            <p className="mt-2 text-gray-600">Des ressources pour booster votre activité juridique.</p>
          </div>
          <Link
            href="/ressources"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-royal hover:text-blue-dark transition-colors"
          >
            Voir toute la boutique <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile : scroll horizontal, Desktop : grille 3 colonnes */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-x-visible">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[75vw] sm:min-w-[260px] md:min-w-0 snap-center bg-white border border-border-light rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {/* Image de couverture (optionnelle) */}
              {product.image && (
                <div className="h-32 bg-bg-light rounded-lg mb-4 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
              )}
              <span className="text-xs font-medium text-blue-royal bg-blue-light px-2 py-1 rounded-full self-start">
                {product.category}
              </span>
              <h3 className="mt-2 font-semibold text-text-dark">{product.title}</h3>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className={`font-bold ${product.price === 'Gratuit' ? 'text-green-600' : 'text-gold-cta'}`}>
                  {product.price}
                </span>
                <button
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    product.price === 'Gratuit'
                      ? 'bg-blue-royal text-white hover:bg-blue-dark'
                      : 'bg-gold-cta text-white hover:bg-yellow-600'
                  }`}
                >
                  {product.price === 'Gratuit' ? 'Télécharger' : 'Acheter'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lien mobile "Voir toute la boutique" */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-royal hover:text-blue-dark transition-colors"
          >
            Voir toute la boutique <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}