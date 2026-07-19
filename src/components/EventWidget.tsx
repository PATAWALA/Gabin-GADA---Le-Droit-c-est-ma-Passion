// Variable de test – à connecter à votre source de données
const isEventActive = true; // Passez à false pour masquer

export default function EventWidget() {
  if (!isEventActive) return null;

  return (
    <div className="bg-blue-light/30 border-b border-blue-royal/10 py-3.5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        {/* Texte de l'événement */}
        <p className="text-sm text-blue-royal font-medium leading-relaxed">
          📣 Inscriptions ouvertes pour le Bénin Legal Summit
        </p>
        
        {/* Bouton d'action responsive */}
        <a
          href="/evenements"
          className="w-full sm:w-auto text-center text-xs bg-blue-royal text-white px-4 py-2 sm:py-1.5 rounded-full hover:bg-blue-dark font-semibold shadow-sm transition-colors whitespace-nowrap"
        >
          En savoir plus
        </a>
      </div>
    </div>
  );
}