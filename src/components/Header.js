import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { name: 'Početna', href: '/' },
    { name: 'Turneja', href: '/turneja' },
    { name: 'Diskografija', href: '/diskografija' },
    { name: 'Galerija', href: '/galerija' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    // PROMJENA: Osnova je flex kolona (za mobitel), ali na srednjim ekranima (md:) postaje red
    <header className="flex flex-col items-center p-4 bg-black text-white border-b border-gray-800 md:flex-row md:justify-between">

      <div className="text-2xl font-bold tracking-wider">
        <Link href="/">DRAGANA MIRKOVIĆ</Link>
      </div>

      {/* PROMJENA: Margina gore za mobitel (mt-4), koja nestaje na većim ekranima (md:mt-0) */}
      <nav className="mt-4 md:mt-0">
        {/* PROMJENA: Manji razmak na mobitelu (space-x-4), veći na većim ekranima (md:space-x-8) */}
        {/* flex-wrap omogućava da linkovi pređu u novi red ako nema mjesta */}
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
          {navLinks.map((link) => (
            <li key={link.name} className="mt-2 md:mt-0">
              <Link href={link.href} className="hover:text-pink-500 transition-colors duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}