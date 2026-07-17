const partenaires = ['FAGACE', 'CERDb', 'Université d’Abomey-Calavi', 'FeexPay', 'WhatsPAY'];

export default function SynergySection() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#0F172A]">
          Propulsé par le <span className="text-[#0A50C9]">Benin Legal Summit</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Chaque année, le Benin Legal Summit réunit les plus grands cabinets et institutions. 
          Rejoindre DCMP Network, c’est bénéficier de cette synergie unique pour gagner en visibilité et en crédibilité.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {partenaires.map((nom) => (
            <div
              key={nom}
              className="w-full h-16 flex items-center justify-center bg-white border border-[#E2E8F0] rounded-lg shadow-sm text-sm font-semibold text-gray-500 hover:text-[#0A50C9] hover:border-[#0A50C9]/30 transition-all"
            >
              {nom}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}