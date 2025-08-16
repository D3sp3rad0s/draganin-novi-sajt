import Image from 'next/image'; // Uvozimo Image komponentu za slike

export default function GalleryPage() {
  // Pametan način da napravimo listu naših 6 slika
  // Ako imaš više ili manje od 6 slika, samo promijeni ovaj broj
  const imageCount = 6; 
  const images = Array.from({ length: imageCount }, (_, i) => `/gallery/foto-${i + 1}.jpg`);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-5xl font-bold mb-16">Galerija</h1>
      
      {/* Responzivni grid za slike */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* Prolazimo kroz listu slika i svaku prikazujemo */}
        {images.map((src, index) => (
          <div key={index} className="w-full h-80 relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image
              src={src}
              alt={`Slika iz galerije ${index + 1}`}
              fill // 'fill' će automatski popuniti prostor
              style={{ objectFit: 'cover' }} // osigurava da slika lijepo popuni prostor bez izobličenja
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Pomaže Next.js-u da optimizira slike za različite ekrane
            />
          </div>
        ))}

      </div>
    </div>
  );
}