import { GraduationCap, FileText, Video } from 'lucide-react';
import Link from 'next/link';

export default function AcademySection() {
  return (
    <section className="py-16 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-royal">Le tremplin pour les futurs professionnels du droit</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Préparez vos concours, accédez à des annales corrigées et suivez des formations en direct.
          </p>
        </div>

        {/* Grille 2 colonnes sur desktop, empilée sur mobile */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-border-light rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all">
            <div className="p-2 bg-blue-light rounded-lg">
              <FileText className="w-6 h-6 text-blue-royal" />
            </div>
            <div>
              <h3 className="font-semibold text-text-dark">Annales & Sujets Corrigés</h3>
              <p className="text-sm text-gray-600 mt-1">
                Préparez les concours de magistrature, greffe et barreau avec nos annales commentées.
              </p>
            </div>
          </div>

          <div className="bg-white border border-border-light rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all">
            <div className="p-2 bg-blue-light rounded-lg">
              <Video className="w-6 h-6 text-blue-royal" />
            </div>
            <div>
              <h3 className="font-semibold text-text-dark">Formations & Webinaires</h3>
              <p className="text-sm text-gray-600 mt-1">
                Accédez à des sessions de révision en direct avec des professionnels du droit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA mobile pleine largeur, desktop inline */}
        <div className="text-center">
          <Link
            href="/ressources/etudiants"
            className="inline-flex items-center justify-center gap-2 bg-gold-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors shadow-sm w-full md:w-auto"
          >
            <GraduationCap className="w-5 h-5" />
            Rejoindre l'espace étudiant
          </Link>
        </div>
      </div>
    </section>
  );
}