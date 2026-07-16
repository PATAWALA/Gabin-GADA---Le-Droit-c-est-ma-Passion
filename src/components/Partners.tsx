export default function Partners() {
  const partners = [
    'Barreau du Bénin',
    'Ministère de la Justice',
    'Ordre des Avocats',
    'OHADA',
    'Nations Unies',
    'Union Européenne',
  ];

  return (
    <section className="py-20 bg-legal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,172,47,0.06),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ils nous font <span className="text-gradient-gold">confiance</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Institutions nationales et internationales partenaires de nos initiatives juridiques.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {partners.map((name, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center w-full h-24 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-gold-500/30 hover:bg-gold-500/5 hover:shadow-[0_0_25px_-5px_rgba(229,172,47,0.15)]"
            >
              {/* Ligne décorative dorée au sommet */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-3/4 transition-all duration-500" />
              
              <span className="text-xs md:text-sm font-serif font-bold text-white/70 group-hover:text-gold-300 transition-colors text-center leading-tight tracking-wide uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}