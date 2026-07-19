import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'DCMP Network – Réseau des cabinets juridiques en Afrique',
  description:
    'Trouvez des cabinets d’avocats, fiscalistes et conseils en Afrique. Rejoignez le réseau DCMP.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}