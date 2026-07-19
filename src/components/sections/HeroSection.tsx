import SearchBar from '@/components/ui/SearchBar';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Arrière-plan épuré */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-slate-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* 1. LE TITRE AVEC LE N°1 ENCADRÉ */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-royal leading-tight tracking-tight">
          Le réseau{' '}
          <span className="inline-block bg-amber-500 text-blue-950 px-3 py-1 mx-1 rounded-xl transform -rotate-2 shadow-sm text-3xl md:text-5xl lg:text-6xl font-black">
            N°1
          </span>{' '}
          qui connecte les cabinets juridiques et leurs clients en Afrique
        </h1>
        
        {/* 2. LE SOUS-TITRE ENCADRÉ */}
        <p className="mt-8 text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Trouvez un avocat, un fiscaliste ou un conseil pour vos affaires,{' '}
          <span className="font-semibold text-blue-royal">
            accédez à nos guides pratiques et ressources pour étudiants
          </span>
          , ou rejoignez notre communauté pour propulser votre activité.
        </p>
        
        {/* 3. ACTION PRINCIPALE : RECHERCHE DE CABINETS */}
        <div className="mt-12 w-full max-w-2xl mx-auto">
          <SearchBar />
        </div>

        {/* 4. LES TROIS CTA SECONDAIRES CIBLÉS (Nouveauté UX) */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <span className="text-gray-500 self-center w-full md:w-auto mb-2 md:mb-0">Vous êtes ?</span>

          {/* Action Étudiant */}
          <Link href="/ressources" className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-900 font-medium rounded-full transition-colors">
            🎓 Étudiant (Guides & Concours)
          </Link>

          {/* Action Cabinet / Professionnel */}
          <Link href="/auth/register" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 font-medium rounded-full transition-colors">
            🏛️ Un Cabinet (Nous rejoindre)
          </Link>

          {/* Action Particulier / Entreprise */}
          <Link href="/cabinets" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-full transition-colors">
            💼 Besoin d'un expert
          </Link>
        </div>

      </div>
    </section>
  );
}