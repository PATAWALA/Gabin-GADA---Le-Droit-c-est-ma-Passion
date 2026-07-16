import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Gabin GADA - Le Droit c\'est ma Passion',
    template: '%s | Gabin GADA',
  },
  description:
    'Gabin GADA, Avocat au Barreau du Bénin. Consultation juridique, défense pénale, droit des affaires, formations et Benin Legal Summit.',
  keywords: ['avocat', 'Bénin', 'droit', 'OHADA', 'justice', 'Gabin GADA', 'Benin Legal Summit'],
  authors: [{ name: 'Gabin GADA' }],
  openGraph: {
    title: 'Gabin GADA - Le Droit c\'est ma Passion',
    description: 'Avocat au Barreau du Bénin, expert en droit des affaires et défense pénale.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-legal-950 text-white font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}