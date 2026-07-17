import { notFound } from 'next/navigation';
import { MapPin, Mail, Phone, Globe, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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
  mensah: {
    nom: 'SCP MENSAH & Partners',
    specialites: ['Droit OHADA'],
    ville: 'Abidjan',
    pays: 'Côte d’Ivoire',
    adresse: 'Plateau, Immeuble SIB',
    email: 'contact@mensah.ci',
    telephone: '+225 01 00 00 00',
    site: 'www.mensah.ci',
  },
  diallo: {
    nom: 'Cabinet DIALLO Conseil',
    specialites: ['Droit Commercial'],
    ville: 'Dakar',
    pays: 'Sénégal',
    adresse: 'Avenue Cheikh Anta Diop',
    email: 'diallo@conseil.sn',
    telephone: '+221 77 00 00 00',
    site: 'www.dialloconseil.sn',
  },
  boko: {
    nom: 'Etude BOKO & Frères',
    specialites: ['Droit Pénal'],
    ville: 'Cotonou',
    pays: 'Bénin',
    adresse: 'Rue 210, Ganhi',
    email: 'boko@etude.bj',
    telephone: '+229 96 00 00 00',
    site: 'www.boko.bj',
  },
  ekue: {
    nom: 'Cabinet EKUE',
    specialites: ['Sécurité Sociale'],
    ville: 'Lomé',
    pays: 'Togo',
    adresse: 'Avenue de la Libération',
    email: 'ekue@cabinet.tg',
    telephone: '+228 91 00 00 00',
    site: 'www.ekue.tg',
  },
};

export default function CabinetProfile({ params }: { params: { id: string } }) {
  const cabinet = cabinetsData[params.id];
  if (!cabinet) notFound();

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/cabinets" className="inline-flex items-center gap-2 text-[#0A50C9] hover:underline mb-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Retour à la liste
        </Link>
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
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