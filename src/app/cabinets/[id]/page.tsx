import { notFound } from 'next/navigation';
import { MapPin, Mail, Phone, Globe, Tag, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

// Base de démonstration (quelques cabinets réels)
const cabinetsData: Record<string, any> = {
  kouassi: {
    nom: 'Cabinet KOUASSI & Associés',
    specialites: ['Droit Fiscal', 'Droit des Affaires'],
    ville: 'Cotonou',
    pays: 'Bénin',
    adresse: 'Avenue Steinmetz, Immeuble BK',
    email: 'contact@kouassi.bj',
    telephone: '+229 97 00 00 00',
    site: 'www.kouassi.bj',
  },
  adotevi: {
    nom: 'Cabinet ADOTEVI',
    specialites: ['Droit du Travail'],
    ville: 'Lomé',
    pays: 'Togo',
    adresse: 'Boulevard du 13 Janvier',
    email: 'adotevi@cabinet.tg',
    telephone: '+228 90 00 00 00',
    site: 'www.adotevi.tg',
  },
  // Ajoutez d'autres vrais cabinets si vous voulez
};

// Génération d'un profil simulé pour tout ID inconnu
function getSimulatedProfile(id: string) {
  return {
    nom: `Cabinet ${id.toUpperCase()}`,
    specialites: ['Droit des Affaires', 'Fiscalité'],
    ville: 'Cotonou',
    pays: 'Bénin',
    adresse: 'Immeuble DCMP Network, Boulevard de la Marina',
    email: `contact@${id}.bj`,
    telephone: '+229 00 00 00 00',
    site: `www.${id}.bj`,
    isSimulated: true,
  };
}

export default function CabinetProfile({ params }: { params: { id: string } }) {
  // Cherche d'abord dans les vrais cabinets, sinon crée un simulé
  const cabinet = cabinetsData[params.id] || getSimulatedProfile(params.id);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/cabinets" className="inline-flex items-center gap-2 text-[#0A50C9] hover:underline mb-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Retour à la liste
        </Link>

        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
          {/* Bandeau simulation si nécessaire */}
          {cabinet.isSimulated && (
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800">Profil simulé</p>
                <p className="text-sm text-amber-700">
                  La plateforme DCMP Network est actuellement en phase de test. Les informations affichées sont fictives et servent de démonstration.
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#0A50C9] text-white rounded-full flex items-center justify-center text-2xl font-bold">
              {cabinet.nom.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#0F172A]">{cabinet.nom}</h1>
              <div className="flex items-center gap-1 text-gray-500 mt-1">
                <MapPin className="w-4 h-4" />
                {cabinet.ville}, {cabinet.pays}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {cabinet.specialites.map((spec: string) => (
              <span key={spec} className="px-3 py-1 text-sm font-medium bg-[#E8F0FE] text-[#003399] rounded-full flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {spec}
              </span>
            ))}
          </div>

          <div className="space-y-3 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0A50C9]" />
              {cabinet.adresse}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0A50C9]" />
              <a href={`mailto:${cabinet.email}`} className="hover:text-[#0A50C9]">{cabinet.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0A50C9]" />
              <a href={`tel:${cabinet.telephone}`} className="hover:text-[#0A50C9]">{cabinet.telephone}</a>
            </div>
            {cabinet.site && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0A50C9]" />
                <a href={`https://${cabinet.site}`} target="_blank" rel="noopener" className="hover:text-[#0A50C9]">{cabinet.site}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}