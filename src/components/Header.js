export default function Header() {
  // Ovdje možemo lako dodavati ili mijenjati linkove
  const navLinks = [
    { name: 'Početna', href: '/' },
    { name: 'Turneja', href: '/turneja' },
    { name: 'Diskografija', href: '/diskografija' },
    { name: 'Galerija', href: '/galerija' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    // Koristimo Tailwind CSS klase za stiliziranje koje smo instalirali na početku
    <header className="flex items-center justify-between p-4 bg-black text-white border-b border-gray-800">
      
      {/* Logo Sekcija */}
      <div className="text-2xl font-bold tracking-wider">
        <a href="/">DRAGANA MIRKOVIĆ</a>
      </div>

      {/* Navigacija Sekcija */}
      <nav>
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-pink-500 transition-colors duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}