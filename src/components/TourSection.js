// Obrati pažnju na { dates } u prvoj liniji. To je važno!
export default function TourSection({ dates }) {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Nadolazeći Koncerti</h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Ovdje se događa magija: prolazimo kroz listu i za svaki koncert pravimo karticu */}
        {dates.map((concert) => (
          <div key={concert.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <p className="text-sm text-gray-500 mb-2">{concert.datum}</p>
            <h3 className="text-2xl font-bold text-gray-900">{concert.grad}</h3>
            <p className="text-md text-gray-600">{concert.drzava}</p>
            <p className="text-lg font-semibold text-pink-600 mt-4">{concert.dvorana}</p>
            <a href="#" className="mt-6 inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
              Kupi Ulaznice
            </a>
          </div>
        ))}

      </div>
    </section>
  )
}