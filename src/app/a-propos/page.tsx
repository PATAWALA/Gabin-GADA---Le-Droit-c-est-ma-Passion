import { Scale, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0F172A]">À propos de DCMP Network</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            La plateforme qui connecte les cabinets juridiques africains et leurs clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-[#0A50C9]" />
            </div>
            <h3 className="font-semibold text-[#0F172A]">Notre mission</h3>
            <p className="text-gray-600 text-sm mt-2">Faciliter la mise en relation entre les cabinets d’avocats et les entreprises en Afrique.</p>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-[#0A50C9]" />
            </div>
            <h3 className="font-semibold text-[#0F172A]">Notre vision</h3>
            <p className="text-gray-600 text-sm mt-2">Devenir le carrefour incontournable des professionnels du droit en Afrique.</p>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="w-6 h-6 text-[#0A50C9]" />
            </div>
            <h3 className="font-semibold text-[#0F172A]">Notre histoire</h3>
            <p className="text-gray-600 text-sm mt-2">Initié par Gabin GADA, le réseau DCMP est né du Benin Legal Summit pour fédérer les acteurs du droit.</p>
          </div>
        </div>

        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Gabin GADA, fondateur</h2>
          <p className="text-gray-600 leading-relaxed">
            Avocat au Barreau du Bénin, Gabin GADA a fondé DCMP Network pour répondre à un double besoin : 
            offrir aux cabinets une visibilité panafricaine et permettre aux entreprises de trouver facilement des experts juridiques qualifiés.
          </p>
        </div>
      </div>
    </div>
  );
}