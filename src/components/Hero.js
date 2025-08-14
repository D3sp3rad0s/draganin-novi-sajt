import Link from 'next/link'; // I ovdje uvezemo Link

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gray-100">
      <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
        DO POSLEDNJEG DAHA
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        Svjetska Turneja 2025
      </p>
      {/* I ovdje zamijenimo <a> sa <Link> */}
      <Link href="/turneja" className="mt-8 inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-700 transition-colors text-lg">
        Pogledaj Datume
      </Link>
    </section>
  )
}