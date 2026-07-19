// Variable de test – à connecter à votre source de données
const isEventActive = true; // Passez à false pour masquer

export default function EventWidget() {
  if (!isEventActive) return null;

  return (
    <div className="bg-blue-light/30 py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <p className="text-sm text-blue-royal font-medium">
          📣 Inscriptions ouvertes pour le Bénin Legal Summit – 15-16 Décembre 2025
        </p>
        <a
          href="/evenements"
          className="text-xs bg-blue-royal text-white px-3 py-1 rounded-full hover:bg-blue-dark transition-colors"
        >
          En savoir plus
        </a>
      </div>
    </div>
  );
}