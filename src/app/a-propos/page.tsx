import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'À propos de Gabin GADA | Cabinet DCMP',
  description: 'Découvrez le parcours et la vision de Gabin GADA, Avocat au Barreau du Bénin, fondateur du Cabinet DCMP.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-legal-950">
      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="relative w-48 h-48 md:w-full aspect-square rounded-full overflow-hidden border-2 border-gold-500/30 mx-auto">
            <Image
              src="/images/gabin-gada.jpg"
              alt="Gabin GADA"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Gabin <span className="text-gradient-gold">GADA</span>
            </h1>
            <p className="text-white/60 text-lg italic">Avocat au Barreau du Bénin – Fondateur du Cabinet DCMP</p>
            <hr className="border-gold-500/20" />
            <p className="text-white/70 leading-relaxed">
              Né à Cotonou, Gabin GADA a très tôt été animé par la conviction que le droit est un levier de développement pour l’Afrique. Après des études en droit privé fondamental à l’Université d’Abomey-Calavi et une spécialisation en droit des affaires OHADA, il prête serment au Barreau du Bénin.
            </p>
            <p className="text-white/70 leading-relaxed">
              Avocat plaidant, il se fait remarquer par sa rigueur et son éloquence. Rapidement, il ressent le besoin de créer un écosystème juridique complet, capable de former les professionnels, d’organiser le dialogue entre praticiens et d’offrir un conseil de haut niveau aux entreprises.
            </p>
            <h2 className="text-2xl font-serif font-bold text-white mt-10">Le Cabinet DCMP</h2>
            <p className="text-white/70 leading-relaxed">
              DCMP (Droit C’est Ma Passion) est né de cette vision : réunir sous une même bannière le <strong className="text-gold-300">Benin Legal Summit</strong>, événement annuel international, un catalogue de <strong className="text-gold-300">formations certifiantes</strong> et un <strong className="text-gold-300">cabinet de communication juridique</strong> pour aider les entreprises à maîtriser leur discours et leur conformité légale.
            </p>
            <blockquote className="border-l-4 border-gold-400 pl-6 text-white/50 italic">
              “Le droit est ma passion, votre confiance est ma force.” – Gabin GADA
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}