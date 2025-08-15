import Image from 'next/image';

export default function AlbumCard({ album }) {
  return (
    <a 
      href={album.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      // PROMJENA: Dodali smo 'relative' i 'group' klase
      className="relative block bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
    >
      
      <Image
        src={album.imageUrl}
        alt={`Omot albuma ${album.title}`}
        width={500}
        height={500}
        className="w-full h-auto object-cover"
      />

      {/* NOVI DIO: Overlay s Play gumbom */}
      {/* Pojavljuje se kad se pređe mišem preko cijele kartice (zbog 'group-hover') */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 opacity-0 group-hover:opacity-50 transition-all duration-300">
        <span className="text-white text-6xl transform group-hover:scale-110 transition-transform">
          ►
        </span>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-900">{album.title}</h3>
        <p className="text-gray-600 mt-1">{album.year}</p>
      </div>

    </a>
  )
}