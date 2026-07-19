'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [ressourcesOpen, setRessourcesOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) router.push(`/cabinets?q=${encodeURIComponent(q)}`);
    else router.push('/cabinets');
    setSearchOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-royal">
          DCMP Network
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-dark">
          <Link href="/" className="hover:text-blue-royal transition-colors">Accueil</Link>
          <Link href="/cabinets" className="hover:text-blue-royal transition-colors">Voir tous les cabinets</Link>
          <Link href="/evenements" className="hover:text-blue-royal transition-colors">Événements</Link>

          {/* Dropdown Ressources */}
          <div className="relative group">
            <button
              onClick={() => setRessourcesOpen(!ressourcesOpen)}
              className="flex items-center gap-1 hover:text-blue-royal transition-colors"
            >
              Ressources
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white border border-border-light rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="/ressources"
                className="block px-4 py-2 text-sm text-text-dark hover:bg-bg-light hover:text-blue-royal"
              >
                Librairie & Guides
              </Link>
              <Link
                href="/ressources/etudiants"
                className="block px-4 py-2 text-sm text-text-dark hover:bg-bg-light hover:text-blue-royal"
              >
                Espace Étudiants (Concours & Académie)
              </Link>
            </div>
          </div>

          <Link href="/a-propos" className="hover:text-blue-royal transition-colors">À propos</Link>
        </nav>

        {/* Zone droite desktop : recherche + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 pl-8 pr-3 py-1.5 text-sm border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal focus:border-transparent"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </form>
          <Link
            href="/auth/register"
            className="bg-gold-cta text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-colors shadow-sm"
          >
            Inscrire mon cabinet
          </Link>
        </div>

        {/* Mobile toggles */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-1">
            <Search className="w-6 h-6 text-text-dark" />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Recherche mobile */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 bg-white border-t">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Rechercher un cabinet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-royal"
              autoFocus
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </form>
        </div>
      )}

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <Link href="/" className="block py-2 text-text-dark hover:text-blue-royal">Accueil</Link>
          <Link href="/cabinets" className="block py-2 text-text-dark hover:text-blue-royal">Voir tous les cabinets</Link>
          <Link href="/evenements" className="block py-2 text-text-dark hover:text-blue-royal">Événements</Link>

          {/* Ressources mobile (toggle) */}
          <div>
            <button
              onClick={() => setRessourcesOpen(!ressourcesOpen)}
              className="flex items-center justify-between w-full py-2 text-text-dark hover:text-blue-royal"
            >
              Ressources
              <ChevronDown className={`w-4 h-4 transition-transform ${ressourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {ressourcesOpen && (
              <div className="ml-4 space-y-1">
                <Link href="/ressources" className="block py-1 text-sm text-gray-600 hover:text-blue-royal">
                  Librairie & Guides
                </Link>
                <Link href="/ressources/etudiants" className="block py-1 text-sm text-gray-600 hover:text-blue-royal">
                  Espace Étudiants (Concours & Académie)
                </Link>
              </div>
            )}
          </div>

          <Link href="/a-propos" className="block py-2 text-text-dark hover:text-blue-royal">À propos</Link>
          <Link href="/auth/register" className="block w-full text-center bg-gold-cta text-white py-2 rounded-lg font-semibold mt-2">
            Inscrire mon cabinet
          </Link>
        </div>
      )}
    </header>
  );
}