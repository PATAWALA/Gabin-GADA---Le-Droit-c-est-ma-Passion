import SearchBar from '@/components/ui/SearchBar';

export default function HeroSection() {
  const handleSearch = (specialite: string, zone: string) => {
    alert(`Recherche de "${specialite}" dans "${zone}"`);
    // Ici redirection vers /cabinets?specialite=...&zone=...
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark leading-tight">
          Le premier réseau d’affaires des cabinets juridiques et fiscaux en Afrique.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Trouvez les meilleurs experts en Fiscalité, Commerce et Droit du travail, ou rejoignez notre réseau de cabinets partenaires.
        </p>
        <div className="mt-10">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </section>
  );
}