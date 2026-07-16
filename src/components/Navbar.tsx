'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Scale, Menu, X, Calendar, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Année du prochain Summit (logique : jusqu'au 31 décembre, on garde l'année en cours ; à partir du 1er janvier, on passe à l'année suivante)
  const summitYear = useMemo(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    // Si nous sommes en janvier ou après, mais avant le 1er janvier de l'année suivante, on reste sur l'année en cours.
    // En réalité, l'événement a lieu en décembre. Après le 31 décembre, on passe à l'année suivante.
    // Donc la règle est simple : du 1er janvier au 31 décembre, l'année de l'édition est l'année en cours (même si l'événement est déjà passé en décembre, on affiche toujours l'année en cours jusqu'à la fin de l'année).
    // Au 1er janvier, on affiche l'année suivante.
    return currentYear;
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/sommet', label: `Summit ${summitYear}` },
    { href: '/formations', label: 'Formations' },
    { href: '/cabinet', label: 'Cabinet' },
    { href: '/a-propos', label: 'À propos' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-legal-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec effet de style unique */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <Scale className="w-7 h-7 text-gold-400 group-hover:text-gold-300 transition-colors" />
              <Sparkles className="w-3 h-3 text-gold-300 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-white leading-none tracking-tight">
                Gabin <span className="text-gradient-gold">GADA</span>
              </span>
              <span className="text-[10px] text-white/40 tracking-widest uppercase leading-none mt-0.5">
                Cabinet DCMP
              </span>
            </div>
          </Link>

          {/* Desktop Menu : séparateurs verticaux discrets */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg ${
                    link.href === '/sommet'
                      ? 'text-gold-400 bg-gold-400/5 hover:text-gold-300'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {/* Ligne décorative sous le lien actif (simulée) */}
                  {link.href === '/sommet' && (
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  )}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="w-px h-4 bg-white/10 mx-2 hidden xl:block" aria-hidden="true" />
                )}
              </li>
            ))}
            <li className="ml-4">
              <Link
                href="/sommet"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gold-500 px-5 py-2.5 text-legal-950 text-sm font-semibold shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-400 hover:shadow-gold-400/30"
              >
                <Calendar className="w-4 h-4" />
                Summit {summitYear}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-gold-400 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-legal-950/95 backdrop-blur-xl border-t border-white/5 pt-4 pb-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors text-base font-serif ${
                      link.href === '/sommet'
                        ? 'text-gold-400 bg-gold-400/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/sommet"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gold-500 text-legal-950 font-semibold px-6 py-3 rounded-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Summit {summitYear}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}