import Link from 'next/link';
import { Scale, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-blue-royal font-bold text-xl">
              <Scale className="w-6 h-6" />
              <span>DCMP Network</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 max-w-xs">
              Le premier réseau d’affaires des cabinets juridiques et fiscaux en Afrique.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-dark mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/cabinets" className="hover:text-blue-royal">Trouver un cabinet</Link></li>
              <li><Link href="/sommet" className="hover:text-blue-royal">Benin Legal Summit</Link></li>
              <li><Link href="/espace-cabinet" className="hover:text-blue-royal">Espace Cabinet</Link></li>
              <li><Link href="/a-propos" className="hover:text-blue-royal">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-dark mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-royal mt-0.5" />
                Cotonou, Bénin
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-royal" />
                contact@dcmp.network
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-royal" />
                +229 00 00 00 00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-light text-center text-xs text-gray-400">
          © {new Date().getFullYear()} DCMP Network. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}