import { ArrowRight, MapPin, Tag } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const cabinets = [
  { nom: 'Cabinet KOUASSI & Associés', specialites: ['Droit Fiscal', 'Droit des Affaires'], ville: 'Cotonou, Bénin', id: 'kouassi' },
  { nom: 'Cabinet ADOTEVI', specialites: ['Droit du Travail'], ville: 'Lomé, Togo', id: 'adotevi' },
  { nom: 'SCP MENSAH & Partners', specialites: ['Droit OHADA'], ville: 'Abidjan, CI', id: 'mensah' },
  { nom: 'Cabinet DIALLO Conseil', specialites: ['Droit Commercial'], ville: 'Dakar, Sénégal', id: 'diallo' },
  { nom: 'Etude BOKO & Frères', specialites: ['Droit Pénal'], ville: 'Cotonou, Bénin', id: 'boko' },
  { nom: 'Cabinet EKUE', specialites: ['Sécurité Sociale'], ville: 'Lomé, Togo', id: 'ekue' },
];

export default function CabinetsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A]">Explorer les cabinets partenaires</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les cabinets d’avocats et de conseils juridiques membres de notre réseau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabinets.map((cabinet) => (
            <Card key={cabinet.id} className="flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E8F0FE] text-[#0A50C9] rounded-full flex items-center justify-center font-bold">
                  {cabinet.nom.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A]">{cabinet.nom}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4" />
                    {cabinet.ville}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {cabinet.specialites.map((spec) => (
                  <span key={spec} className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-[#E8F0FE] text-[#003399] rounded-full">
                    <Tag className="w-3 h-3" />
                    {spec}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <Button href={`/cabinets/${cabinet.id}`} variant="outline" className="w-full text-sm">
                  Voir le profil <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-[#0A50C9] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Vous êtes un cabinet ?</h3>
          <p className="text-[#E8F0FE] max-w-2xl mx-auto mb-6">
            Rejoignez le réseau DCMP pour capter vos futurs clients et bénéficier d’une visibilité sur toute l’Afrique.
          </p>
          <Button href="/espace-cabinet" className="bg-white !text-[#0A50C9] hover:bg-gray-100">
            Créer mon compte cabinet
          </Button>
        </div>
      </div>
    </section>
  );
}