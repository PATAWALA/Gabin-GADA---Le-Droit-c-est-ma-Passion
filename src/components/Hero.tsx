import { Scale, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-legal-950">
      {/* Fond décoratif */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-gold-500/10 to-transparent opacity-50 blur-3xl" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-600/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
        {/* Texte */}
        <div className="flex-1 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 rounded-full px-5 py-2 text-gold-300 text-sm font-medium">
            <Scale className="w-4 h-4" />
            <span>Cabinet DCMP – Droit C’est Ma Passion</span>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold leading-tight">
            <span className="text-white">L’excellence juridique</span>
            <br />
            <span className="text-gradient-gold">au service de l’Afrique</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
            Dirigé par Gabin GADA, Avocat au Barreau du Bénin, le Cabinet DCMP fédère
            le <strong className="text-gold-300">Benin Legal Summit</strong>, des <strong className="text-gold-300">formations d’élite</strong> et un
            <strong className="text-gold-300"> conseil en communication juridique</strong> pour les entreprises.
          </p>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            <Link
              href="/sommet"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-legal-950 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-2xl shadow-gold-500/20"
            >
              <Play className="w-5 h-5" />
              Benin Legal Summit 2027
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-3 border border-white/20 hover:border-gold-400 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              Découvrir Gabin GADA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Symbole juridique */}
        <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/5 blur-2xl" />
            <div className="relative flex items-center justify-center h-full">
              <Scale
                className="w-48 h-48 md:w-64 md:h-64 text-gold-400 opacity-90 drop-shadow-[0_0_30px_rgba(229,172,47,0.4)]"
                strokeWidth={0.8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}