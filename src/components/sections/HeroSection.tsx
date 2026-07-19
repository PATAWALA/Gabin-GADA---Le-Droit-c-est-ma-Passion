import SearchBar from '@/components/ui/SearchBar'; // votre composant de recherche existant

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-royal leading-tight">
          Le premier réseau d'affaires des cabinets juridiques & fiscaux en Afrique
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Trouvez les meilleurs experts en fiscalité, commerce et droit du travail, ou rejoignez notre communauté de cabinets partenaires.
        </p>
        <div className="mt-10">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}