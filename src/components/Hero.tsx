import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-legal-950 overflow-hidden">
      {/* Fond ultra-léger : juste une lueur centrale */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center space-y-8 animate-fade-in-up">
        {/* Badge discret */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white/60 text-xs md:text-sm tracking-wide">
          Cabinet DCMP – Droit C’est Ma Passion
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white">
          L’excellence juridique
          <br />
          <span className="text-gradient-gold">au service de l’Afrique</span>
        </h1>

        {/* Sous-titre avec mots en valeur */}
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Dirigé par <strong className="text-white font-medium">Gabin GADA</strong>, Avocat au Barreau du Bénin, 
          le Cabinet DCMP fédère le{' '}
          <em className="text-gold-300 not-italic font-medium">Benin Legal Summit</em>, 
          des <em className="text-gold-300 not-italic font-medium">formations d’élite</em> et un{' '}
          <em className="text-gold-300 not-italic font-medium">conseil en communication juridique</em>{' '}
          pour les entreprises.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link
            href="/sommet"
            className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-legal-950 font-semibold px-6 py-3 rounded-lg transition-all shadow-xl shadow-gold-500/20 hover:shadow-gold-400/30"
          >
            <Play className="w-4 h-4" />
            Summit 2027
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-gold-400 text-white font-medium px-6 py-3 rounded-lg transition-all hover:bg-white/5"
          >
            Découvrir Gabin GADA
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}