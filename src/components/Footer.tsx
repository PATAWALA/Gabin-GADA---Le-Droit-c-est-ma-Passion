import Link from 'next/link';
import { Scale, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-legal-900 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,172,47,0.05),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Marque */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Scale className="w-8 h-8 text-gold-400 group-hover:text-gold-300 transition-colors" />
              <span className="text-xl font-serif font-bold text-white">
                Gabin <span className="text-gradient-gold">GADA</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Avocat au Barreau du Bénin. Le droit est ma passion, votre défense est mon engagement.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sommet" className="text-white/50 hover:text-gold-400 transition-colors text-sm">
                  Benin Legal Summit
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-white/50 hover:text-gold-400 transition-colors text-sm">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-gold-400 transition-colors text-sm">
                  Consultations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-gold-400 transition-colors text-sm">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  Immeuble BK, Boulevard de la Marina, Cotonou, Bénin
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <a href="mailto:contact@gabingada.bj" className="text-white/50 hover:text-gold-400 transition-colors text-sm">
                  contact@gabingada.bj
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <a href="tel:+22900000000" className="text-white/50 hover:text-gold-400 transition-colors text-sm">
                  +229 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de bas de page */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Gabin GADA. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/30 hover:text-gold-400 text-xs transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-white/30 hover:text-gold-400 text-xs transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}