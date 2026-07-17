'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Scale, Menu, X, Briefcase, Search } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      router.push(`/cabinets?q=${encodeURIComponent(q)}`);
    } else {
      router.push('/cabinets');
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-[#0A50C9] font-bold text-xl tracking-tight">
            <Scale className="w-6 h-6" />
            <span>DCMP Network</span>
          </Link>

          {/* Navigation desktop (gauche) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/cabinets" className="text-[#0F172A] hover:text-[#0A50C9] transition-colors">
              Voir tous les cabinets
            </Link>
            <Link href="/sommet" className="text-[#0F172A] hover:text-[#0A50C9] transition-colors">
              Le Sommet
            </Link>
            <Link href="/espace-cabinet" className="text-[#0F172A] hover:text-[#0A50C9] transition-colors">
              Espace Cabinet
            </Link>
            <Link href="/a-propos" className="text-[#0F172A] hover:text-[#0A50C9] transition-colors">
              À propos
            </Link>
          </nav>

          {/* Zone droite : recherche + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un cabinet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 pl-9 pr-3 py-2 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] focus:border-transparent text-[#0F172A] placeholder-gray-400"
              />
            </form>
            <Link
              href="/espace-cabinet"
              className="inline-flex items-center gap-2 bg-[#0A50C9] hover:bg-[#003399] text-white font-semibold px-4 py-2 rounded-lg transition-all shadow-sm whitespace-nowrap"
            >
              <Briefcase className="w-4 h-4" />
              Créer mon compte cabinet
            </Link>
          </div>

          {/* Menu mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#0F172A] hover:text-[#0A50C9]"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-[#E2E8F0] pt-3 space-y-3">
            {/* Recherche mobile (pleine largeur) */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un cabinet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A50C9] text-[#0F172A]"
              />
            </form>

            <Link href="/cabinets" className="block py-2 text-[#0F172A] hover:text-[#0A50C9] text-sm">
              Voir tous les cabinets
            </Link>
            <Link href="/sommet" className="block py-2 text-[#0F172A] hover:text-[#0A50C9] text-sm">
              Le Sommet
            </Link>
            <Link href="/espace-cabinet" className="block py-2 text-[#0F172A] hover:text-[#0A50C9] text-sm">
              Espace Cabinet
            </Link>
            <Link href="/a-propos" className="block py-2 text-[#0F172A] hover:text-[#0A50C9] text-sm">
              À propos
            </Link>
            <Link
              href="/espace-cabinet"
              className="w-full mt-2 flex items-center justify-center gap-2 bg-[#0A50C9] hover:bg-[#003399] text-white font-semibold px-4 py-2 rounded-lg transition-all"
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