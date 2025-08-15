import AlbumCard from '@/components/AlbumCard'; // Uvozimo našu novu komponentu

export default function DiscographyPage() {
  // Lažni podaci za albume (kasnije mogu doći s interneta)
  const albums = [
  { id: 1, title: 'Spasi me samoće', year: 1989, imageUrl: '/images/spasi-me-samoce.jpg', youtubeUrl: 'https://www.youtube.com/watch?v=C6PsV20Xwi4&list=OLAK5uy_kpQuAcIBrDCTP_KQ9nNuHlEQCaKJFKN7c&index=2' },
  { id: 2, title: 'Slatko od snova', year: 1994, imageUrl: '/images/slatko-od-snova.jpg', youtubeUrl: 'https://www.youtube.com/watch?v=4QNvmGREgSM&list=OLAK5uy_lMluS08dz6siEqJbUXO2PBx4ATTFsDJcg&index=2' },
  { id: 3, title: 'Nije tebi do mene', year: 1997, imageUrl: '/images/nije-tebi-do-mene.jpg', youtubeUrl: 'https://www.youtube.com/watch?v=8PbgxKplL_8&list=OLAK5uy_kzzycZRukkjetef5t3UwCn67hPxThjcZI&index=2' },
  { id: 4, title: 'Eksplozija', year: 2005, imageUrl: '/images/eksplozija.jpg', youtubeUrl: 'https://www.youtube.com/watch?v=mBQCf3X1ZWg&list=OLAK5uy_kn6yFwiZCcSecXknvuxjjxrS9bW6eqs3U&index=2' },
  { id: 5, title: 'Luče moje', year: 2006, imageUrl: '/images/luce-moje.jpg', youtubeUrl: 'https://www.youtube.com/watch?v=VupgUSS8BCM&list=OLAK5uy_nEuOyPQ0nUyIYdYypPoKDziNsREwmmrZo&index=2' },
  { id: 6, 'title': 'Od milion jedan', 'year': 2017, 'imageUrl': '/images/od-milion-jedan.jpg', 'youtubeUrl': 'https://www.youtube.com/watch?v=tf1TaDUEPA8&list=OLAK5uy_lRdvi02v-P0sGlYXgBlLxVpkfyW1Ja4aY&index=2' },
];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-5xl font-bold mb-16">Diskografija</h1>

      {/* Grid sustav za prikaz kartica - automatski će se prilagođavati veličini ekrana */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>

    </div>
  );
}