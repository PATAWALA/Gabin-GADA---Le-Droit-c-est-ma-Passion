import Link from 'next/link';
import { Search, Briefcase, GraduationCap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-royal">
            Une plateforme, deux façons de l'utiliser
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Que vous cherchiez un expert ou que vous souhaitiez développer votre activité, DCMP Network vous accompagne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Carte Clients / Étudiants */}
          <div className="bg-bg-light border border-border-light rounded-2xl p-8 text-center hover:shadow-md transition-all">
            <div className="mx-auto w-14 h-14 bg-blue-light rounded-full flex items-center justify-center mb-4">
              <Search className="w-7 h-7 text-blue-royal" />
            </div>
            <h3 className="text-xl font-bold text-blue-royal mb-2">Je cherche un expert</h3>
            <p className="text-gray-600 mb-6">
              Trouvez un avocat, un fiscaliste ou un conseil adapté à vos besoins en quelques clics.
            </p>
            <Link
              href="/cabinets"
              className="inline-flex items-center gap-2 bg-blue-royal text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-dark transition-colors shadow-sm w-full sm:w-auto justify-center"
            >
              <Search className="w-5 h-5" />
              Trouver un cabinet
            </Link>
          </div>

          {/* Carte Cabinets / Étudiants (activité) */}
          <div className="bg-bg-light border border-border-light rounded-2xl p-8 text-center hover:shadow-md transition-all">
            <div className="mx-auto w-14 h-14 bg-gold-cta/20 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-7 h-7 text-gold-cta" />
            </div>
            <h3 className="text-xl font-bold text-blue-royal mb-2">Je développe mon activité</h3>
            <p className="text-gray-600 mb-6">
              Inscrivez votre cabinet, accédez aux ressources, participez aux événements et formez la nouvelle génération.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/auth/register"
                className="inline-flex items-center gap-2 bg-gold-cta text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors shadow-sm justify-center"
              >
                <Briefcase className="w-5 h-5" />
                Inscrire mon cabinet
              </Link>
              <Link
                href="/ressources/etudiants"
                className="inline-flex items-center gap-2 bg-white border border-blue-royal text-blue-royal font-semibold px-6 py-3 rounded-lg hover:bg-blue-royal hover:text-white transition-colors justify-center"
              >
                <GraduationCap className="w-5 h-5" />
                Espace étudiants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}