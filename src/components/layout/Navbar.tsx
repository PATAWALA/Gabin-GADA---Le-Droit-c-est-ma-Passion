'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-900">
          DCMP Network
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-900 transition-colors">Accueil</Link>
          <Link href="/cabinets" className="hover:text-blue-900 transition-colors">Voir tous les cabinets</Link>
          <Link href="/evenements" className="hover:text-blue-900 transition-colors">Événements</Link>
          <Link href="/a-propos" className="hover:text-blue-900 transition-colors">À propos</Link>
        </nav>

        {/* Zone droite desktop : recherche + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
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
            <Search className="w-6 h-6 text-gray-700" />
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
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              autoFocus
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </form>
        </div>
      )}

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-900">Accueil</Link>
          <Link href="/cabinets" className="block py-2 text-gray-700 hover:text-blue-900">Voir tous les cabinets</Link>
          <Link href="/evenements" className="block py-2 text-gray-700 hover:text-blue-900">Événements</Link>
          <Link href="/a-propos" className="block py-2 text-gray-700 hover:text-blue-900">À propos</Link>
          <Link href="/auth/register" className="block w-full text-center bg-gold-cta text-white py-2 rounded-lg font-semibold mt-2">
            Inscrire mon cabinet
          </Link>
        </div>
      )}
    </header>
  );
}