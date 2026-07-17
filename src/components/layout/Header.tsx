'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, Menu, X, Briefcase } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-blue-royal font-bold text-xl tracking-tight">
            <Scale className="w-6 h-6" />
            <span>DCMP Network</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/cabinets" className="text-text-dark hover:text-blue-royal transition-colors">
              Trouver un cabinet
            </Link>
            <Link href="/sommet" className="text-text-dark hover:text-blue-royal transition-colors">
              Le Sommet
            </Link>
            <Link href="/espace-cabinet" className="text-text-dark hover:text-blue-royal transition-colors">
              Espace Cabinet
            </Link>
            <Link href="/a-propos" className="text-text-dark hover:text-blue-royal transition-colors">
              À propos
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/espace-cabinet"
              className="inline-flex items-center gap-2 bg-blue-royal hover:bg-blue-dark text-white font-semibold px-4 py-2 rounded-lg transition-all shadow-sm"
            >
              <Briefcase className="w-4 h-4" />
              Créer mon compte cabinet
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-dark hover:text-blue-royal"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border-light pt-2 space-y-2">
            <Link href="/cabinets" className="block py-2 text-text-dark hover:text-blue-royal text-sm">
              Trouver un cabinet
            </Link>
            <Link href="/sommet" className="block py-2 text-text-dark hover:text-blue-royal text-sm">
              Le Sommet
            </Link>
            <Link href="/espace-cabinet" className="block py-2 text-text-dark hover:text-blue-royal text-sm">
              Espace Cabinet
            </Link>
            <Link href="/a-propos" className="block py-2 text-text-dark hover:text-blue-royal text-sm">
              À propos
            </Link>
            <Link
              href="/espace-cabinet"
              className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-royal hover:bg-blue-dark text-white font-semibold px-4 py-2 rounded-lg transition-all"
            >
              <Briefcase className="w-4 h-4" />
              Créer mon compte cabinet
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}