import Link from 'next/link'; // KORAK 1: Uvezemo Link komponentu

export default function Header() {
  const navLinks = [
    { name: 'Početna', href: '/' },
    { name: 'Turneja', href: '/turneja' },
    { name: 'Diskografija', href: '/diskografija' },
    { name: 'Galerija', href: '/galerija' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="flex items-center justify-between p-4 bg-black text-white border-b border-gray-800">
      <div className="text-2xl font-bold tracking-wider">
        {/* KORAK 2: Zamijenimo <a> sa <Link> */}
        <Link href="/">DRAGANA MIRKOVIĆ</Link>
      </div>
      <nav>
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* I ovdje zamijenimo <a> sa <Link> */}
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