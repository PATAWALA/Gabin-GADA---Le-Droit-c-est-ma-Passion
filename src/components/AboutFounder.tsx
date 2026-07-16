import Image from 'next/image';
import Link from 'next/link';
import { Quote } from 'lucide-react';

export default function AboutFounder() {
  return (
    <section className="py-24 bg-legal-900 relative overflow-hidden" id="a-propos">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(229,172,47,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/30">
            <div className="absolute inset-0 bg-gradient-to-t from-legal-950/80 via-transparent to-transparent z-10" />
            <Image
              src="/images/gabin-gada.jpg" // Remplacer par la photo réelle
              alt="Gabin GADA – Avocat au Barreau du Bénin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Texte */}
          <div className="space-y-6">
            <Quote className="w-12 h-12 text-gold-400/40" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              <span className="text-gradient-gold">Gabin GADA</span>, Avocat au Barreau du Bénin
            </h2>
            <p className="text-white/70 leading-relaxed">
              Passionné de droit depuis toujours, Gabin GADA a fait du droit son sacerdoce.
              Diplômé en droit des affaires et fort d’une expérience pluridisciplinaire, il fonde le
              <strong className="text-gold-300"> Cabinet DCMP</strong> pour offrir une plateforme unique alliant
              événements juridiques, formations et conseil stratégique aux entreprises.
            </p>
            <p className="text-white/50 leading-relaxed">
              Sa devise : « Le droit est ma passion, votre confiance est ma force. »
              Il a créé le <strong className="text-gold-300">Benin Legal Summit</strong>, rendez-vous annuel
              des juristes africains, et intervient régulièrement sur les questions de droit OHADA,
              commande publique et nouvelles technologies.
            </p>
            <div className="pt-4">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors"
              >
                En savoir plus sur son parcours →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}